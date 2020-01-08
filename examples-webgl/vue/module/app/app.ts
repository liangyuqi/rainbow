import Vue from 'vue'
import Component from 'vue-class-component'
import { Loadjscssfile, Removejscssfile } from '../../../utils/utils';



const BASE_FILE_URLS = [
  'examples-webgl/mock/mock.json',
  'examples-webgl/mock/mock-multiple.json',
  'examples-webgl/mock/mock copy.json']


@Component
export default class App extends Vue {
  // 初始化数据
  robotTotals = 1;
  distance = 1;
  version = 'version:'
  jsonView = {};
  hasLive2d = false;
  files = BASE_FILE_URLS;
  currentIndex = 0

  // 声明周期钩子
  mounted() {

  }


  addLive2d() {
    let div = document.createElement('div')
    div.setAttribute("id", "landlord")
    let canvas = document.createElement('canvas')
    canvas.setAttribute("id", "live2d")
    canvas.setAttribute("class", "live2d")
    canvas.setAttribute("width", "280")
    canvas.setAttribute("height", "570")
    div.appendChild(canvas)
    document.body.appendChild(div)
    Loadjscssfile('examples-webgl/live2d/live2d.css', 'css').then((res) => {
      return Loadjscssfile('examples-webgl/live2d/live2d.js', 'js')
    }).then((res) => {
      return Loadjscssfile('examples-webgl/live2d/index.js', 'js')
    }).then((res) => {
      // @ts-ignore
      this.hasLive2d = true
    }).catch()
  }
  deleteLive2d() {
    // @ts-ignore
    // todo：mtn轮询 没有移除
    this.hasLive2d = false
    Removejscssfile('live2dTag', 'live2d', 'js');
    Removejscssfile('live2dTag', 'live2d', 'css');
    (document.getElementById('landlord') as HTMLElement).remove();
  }
}



