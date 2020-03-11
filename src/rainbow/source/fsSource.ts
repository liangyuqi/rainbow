export const fsSource = `#version 300 es
	precision mediump float;
	uniform sampler2D uSampler;
	// uniform vec2 uConversionVec2;	//坐标转换
	in vec2 vTexCoord;
	in vec4 vBgColor;
	in float vIsText;
	in float vTextBorderWidth;
	in vec4 vTextBorderColor;
	in float vHasTexture;
	in vec4 vPos;
	in float vNotBorder;
	in float vBorderDashed;
	in float vOpacity;
	in float vDisplay;
	out vec4 fragColor;

	float inBorderDashed() {

		// 是否绘制虚线
		float hasDashed = 1.0 - step(vBorderDashed, 0.0);

		vec2 fw = fwidth(vPos.xy);
		float k = fw.y * (1.0/fw.x);

		// 如果k在 0.95 和 1.05 之间
		float c1 = step(0.95, k) * step(k, 1.05);
		// 如果 c1 == 0.1 则 c2 = 0.0 否则 c2 = 1.0
		float c2 = 1.0 - c1;
		// 如果 c1 条件成立 则 gl_FragCoord.x 否则 ...
		float d = gl_FragCoord.x * c1 + (step(1.0, k) * gl_FragCoord.y + step(k, 1.0) * gl_FragCoord.x) * c2;

		return step(mod(floor( d * (1.0/vBorderDashed) ), 2.0), 0.0) * hasDashed;
	}

	vec4 drawText(vec4 texture) {
		// 文字边框是否大于0
		float c1 = step(0.1, vTextBorderWidth);
		// 文字边框是否小于等于0
		float c2 = 1.0 - c1;

		// 第一个插值阶梯
		float start = max(0.0, 0.5 - vTextBorderWidth * 0.1);
		// 边框插值系数
		float r1 = smoothstep(start, start + 0.2, texture.r) * c1;
		// 文字插值系数
		float r2 = smoothstep(0.5, 0.85, texture.r);

		return vec4(mix(vTextBorderColor.rgb, vBgColor.rgb, r2), r2+(1.0-r2)*r1);
	}

	vec4 drawNormal(vec4 texture, vec4 bgColor) {
		float a1 = texture.a * vHasTexture;
		float a2 = bgColor.a;
		return vec4(mix(bgColor.rgb, texture.rgb, a1), a1+(1.0-a1)*a2);
	}

	void main(void) {

		if(vDisplay == 0.0 || vOpacity == 0.0) {
			discard;
			return;
		}

		// ib == 0.0 则正常渲染， ib == 1.0 则渲染反色
		float ib = inBorderDashed();
		vec4 bgColor = vec4(vBgColor.rgb * (1.0 - ib) + (vec3(1.0, 1.0, 1.0) - vBgColor.rgb) * ib, vBgColor.a);

		// 材质
		vec4 tColor = texture(uSampler, vTexCoord);
		// 绘制字体
		vec4 textColor = drawText(tColor);
		// 绘制普通对象
		vec4 normalColor = drawNormal(tColor, bgColor);

		vec4 color = vIsText * textColor + (1.0 - vIsText) * normalColor;
		color.a *= vOpacity;

		fragColor = color;
	}
`;
