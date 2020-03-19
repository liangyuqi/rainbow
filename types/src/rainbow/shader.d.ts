/**
 * 创建着色器对象
 * loadShader()函数首先创建了一个着色器对象，然后为改着色器对象指定源代码，并进行编译，接着检查编译是否成功，如果编译成功，没有出错，就返回着色器对象。
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
export declare function loadShader(gl: any, type: any, source: any): any;
