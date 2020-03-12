/**
 * eventBus
 */
export class EventDispatcher {
  private eventList = {}; // 事件列表

  constructor() {}

  /**
   * 派发事件
   * @param type 事件类型
   * @param args 事件参数
   */
  public dispatchEvent(type: string, ...args: any[]): void {
    let arr: Array<any> = this.eventList[type];
    if (arr) {
      arr.forEach(element => {
        element[0].apply(element[1], args);
        // listener.call(thisObject, args);
      });
    }
  }

  /**
   * 监听事件
   * @param type       事件类型
   * @param listener   回调函数
   * @param thisObject 回调执行对象
   */
  public addEventListener(
    type: string,
    listener: Function,
    thisObject: any
  ): void {
    let arr: Array<any> = this.eventList[type];
    if (!arr) {
      arr = [];
      this.eventList[type] = arr;
    }
    // else
    // {
    //     arr.forEach(element =>
    //     {
    //         if(element[0] == listener && element[1] == thisObject)
    //         {
    //             return;
    //         }
    //     });
    // }
    arr.push([listener, thisObject]);
  }

  /**
   * 移除事件
   * @param type       事件类型
   * @param listener   回调函数
   * @param thisObject 回调执行对象
   */
  public removeEventListener(
    type: string,
    listener: Function,
    thisObject: any
  ): void {
    let arr: Array<any> = this.eventList[type];
    if (arr) {
      let len = arr.length;
      for (let i = len - 1; i >= 0; i--) {
        if (arr[i][0] === listener && arr[i][1] === thisObject) {
          arr.splice(i, 1);
        }
      }
    }
    if (arr && arr.length === 0) {
      this.eventList[type] = null;
      delete this.eventList[type];
    }
  }
}
