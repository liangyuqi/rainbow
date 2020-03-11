export const vsSource = `#version 300 es
	layout(location=1) in vec4 currVertexAndRatio;			//顶点坐标和变形系数
	layout(location=2) in vec4 prevVertexAndRatio;
	layout(location=3) in vec4 nextVertexAndRatio;
	layout(location=4) in vec4 uvAndEdgeOffsetRatio;		//UV

	layout(location=5) in vec4 vertexAndEdgeOffsetValueAndNotFollowViewport;	// 顶点形变  边形变值  是否不跟随视口
	layout(location=6) in vec4 UVRect;						//UVRect
	layout(location=7) in vec4 backgroundColor;				//背景色
	layout(location=8) in vec4 translationAndRotation;		//形变
	layout(location=9) in vec4 isTextAndBorderWidthAndDashedAndScale;		//是否渲染文字 以及 文字边框粗细 以及物体边框虚线 缩放
	layout(location=10) in vec4 textBorderColor;			//文字边框颜色
	layout(location=11) in vec4 opacityAndDisplayAndVpScaleAndVpTrans;			//透明度 是否显示 是否跟随视口缩放 是否跟随视口平移

	out vec2 vTexCoord;				//UV
	out vec4 vBgColor;
	out float vIsText;
	out float vTextBorderWidth;
	out vec4 vTextBorderColor;
	out float vHasTexture;
	out vec4 vPos;
	out float vNotBorder;
	out float vBorderDashed;
	out float vOpacity;
	out float vDisplay;

	uniform vec2 uConversionVec2;	//坐标转换
	uniform vec2 uViewportTranslation;	//视口平移
	uniform vec2 uViewportScale;		//视口缩放
	uniform float uViewportRotation;	//视口旋转
	uniform vec4 uOpacity;				//全局透明度

	mat4 getScaleMatrix(vec2 scale) {
		return mat4(
			scale.x, 0.0, 0.0, 0.0,
			0.0, scale.y, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
		);
	}

	mat4 getRotationMatrix(float radian) {
		float cost = cos(radian);
		float sint = sin(radian);
		return mat4(
			cost, -sint, 0.0, 0.0,
			sint, cost, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0
		);
	}

	mat4 getTranslationMatrix(vec2 translation) {
		return mat4(
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			translation.x, translation.y, 0.0, 1.0
		);
	}

	vec2 getIntersectionVertex(
		in vec2 v1,
		in vec2 v2,
		in float offset
	) {
		vec4 vv1 = vec4(v1, 0.0, 1.0);
		vec4 vv2 = vec4(v2, 0.0, 1.0);
		// 向量夹角
		vec2 mid = normalize(normalize(v1) + normalize(v2));
		float theta = acos(dot(v1, v2) / (length(v1) * length(v2)));
		// 右手法则，判断夹角正负
		vec3 c = cross(vv1.xyz, vv2.xyz);
		float l = offset / sin(theta * 0.5);
		return mid * l * (- sign(c.z));
	}

	vec2 getVertex(
		in vec2 origin,
		in vec2 offsetRatio,
		in vec2 offsetValue
	) {
		vec2 offset = offsetRatio * offsetValue;
		return origin + offset;
	}

	vec2 getFollowViewport() {
		float outViewportStatus = vertexAndEdgeOffsetValueAndNotFollowViewport.w;	//跟随视口状态
		vec3 f = vec3(outViewportStatus - 1.0, outViewportStatus - 2.0, outViewportStatus - 3.0);
		f = step(vec3(0.5, 0.5, 0.5), abs(f));
		return vec2(f.x * f.z, f.y * f.z);
	}

	// 获取缩放矢量
	vec2 getScaleVec(float scale, vec2 followViewport, vec2 notFollowViewport) {
		vec2 scaleVec = vec2(scale, scale);
		vec2 isVpScale = vec2(1.0, 1.0) - opacityAndDisplayAndVpScaleAndVpTrans.zz;
		vec2 dscaleVec = vec2(1.0, 1.0) / uViewportScale * scaleVec * isVpScale + scaleVec * (1.0-isVpScale);
		return dscaleVec * followViewport + scaleVec * notFollowViewport;
	}

	void main(void) {

		vec2 pv = getVertex(prevVertexAndRatio.xy, prevVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);
		vec2 cv = getVertex(currVertexAndRatio.xy, currVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);
		vec2 nv = getVertex(nextVertexAndRatio.xy, nextVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);
		vec2 pe = pv - cv;
		vec2 ne = nv - cv;

		// 判断是否需要乘视口矩阵
		vec2 followViewport = getFollowViewport();
		vec2 notFollowViewport = vec2(1.0, 1.0) - followViewport;

		// 各种矩阵
		mat4 rotationMatrix = getRotationMatrix(translationAndRotation.z);
		// 缩放矩阵，如果设置了脱离视口，则需要计算一个反向缩放矩阵
		mat4 scaleMatrix = getScaleMatrix(getScaleVec(isTextAndBorderWidthAndDashedAndScale.w, followViewport, notFollowViewport));
		mat4 transMat = getTranslationMatrix(translationAndRotation.xy);
		mat4 converMat = getScaleMatrix(uConversionVec2.xy);
		// 视口矩阵
		mat4 vpScaleMatrix = getScaleMatrix(uViewportScale);
		mat4 vpTranslationMatrix = getTranslationMatrix(uViewportTranslation);
		mat4 vpRotationMatrix = getRotationMatrix(uViewportRotation);
		mat4 vpMat = vpTranslationMatrix * vpScaleMatrix * converMat * vpRotationMatrix;

		// 求相邻两边交点向量
		vec2 intersection = getIntersectionVertex(pe, ne, vertexAndEdgeOffsetValueAndNotFollowViewport.z * uvAndEdgeOffsetRatio.z);

		vec4 posOrigin = transMat * scaleMatrix * rotationMatrix * vec4(cv, 0.0, 1.0);
		vec4 posBorder = rotationMatrix * vec4(intersection, 0.0, 0.0);
		posBorder = converMat * vec4(vec2(vpRotationMatrix * posBorder) * followViewport + posBorder.xy * notFollowViewport, 0, 0);
		posOrigin = vec4(vec2(vpMat * posOrigin) * followViewport + vec2(converMat * posOrigin) * notFollowViewport, 0.0, 1.0);

		gl_Position = posOrigin + posBorder;

		// out
		// 如果材质宽度为0 则标志为无材质
		vHasTexture = step(0.0, UVRect.z);
		vTexCoord = uvAndEdgeOffsetRatio.xy * UVRect.zw + UVRect.xy;
		vBgColor = backgroundColor;
		vIsText = isTextAndBorderWidthAndDashedAndScale.x;
		vTextBorderWidth = isTextAndBorderWidthAndDashedAndScale.y;
		vTextBorderColor = textBorderColor;
		vNotBorder = step(vertexAndEdgeOffsetValueAndNotFollowViewport.z, 0.0);

		vPos = rotationMatrix * vec4(cv, 0.0, 1.0); // 用于边框渲染计算
		vPos = vec4(vec2(vpRotationMatrix * vPos) * followViewport + vPos.xy * notFollowViewport, 0.0, 1.0);

		vBorderDashed = isTextAndBorderWidthAndDashedAndScale.z;
		vOpacity = opacityAndDisplayAndVpScaleAndVpTrans.x * uOpacity.x;
		vDisplay = opacityAndDisplayAndVpScaleAndVpTrans.y;
	}
`;
