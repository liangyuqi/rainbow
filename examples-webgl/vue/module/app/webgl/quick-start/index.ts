import Vue from 'vue';
import Component from 'vue-class-component';

/**
 * MVP
 */
@Component
export default class App extends Vue {
  mounted() {
    let gl = (document.getElementById(
      'canvas'
    ) as HTMLCanvasElement).getContext('webgl') as WebGLRenderingContextBase;

    // 指定一个覆盖（清空）canvas的rgba颜色 ，本质是setColor,他把 背景色存到了 webgl system中的glCOLOR_BUFFER_BIT，得手动render一下
    gl.clearColor(0.0, 0.0, 0.5, 1.0);

    // 清除canvas，会清除全部，再使用背景色 填充
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}
