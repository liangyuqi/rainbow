import Vue from 'vue';
import Component from 'vue-class-component';
import {Rainbow} from 'src/rainbow';
import Ajv from 'ajv';
import {BarChartSchema} from './schema';
import {option} from './mock';
import {initCanvas} from '@/utils/webgl';
import {RainbowCharts} from '../rainbowCharts';

@Component
export default class App extends Vue {
  // 初始化数据
  rainbow!: Rainbow;
  canvas!: HTMLCanvasElement;

  mounted() {
    this.canvas = initCanvas();
    if (this.canvas) {
      if (!this.validateData()) return;
      let myChart = new RainbowCharts({
        canvas: this.canvas,
      });
      myChart.setOption(option);
    }
  }

  /**
   * 校验数据
   */
  validateData() {
    let ajv = new Ajv();
    let validate = ajv.compile(BarChartSchema);
    let valid = validate(option);
    if (!valid) {
      console.error(validate.errors);
      alert(JSON.stringify(validate.errors));
      return false;
    } else return true;
  }
}
