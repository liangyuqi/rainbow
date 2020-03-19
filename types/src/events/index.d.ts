/**
 * eventBus
 */
export declare class EventDispatcher {
    private eventList;
    constructor();
    /**
     * 派发事件
     * @param type 事件类型
     * @param args 事件参数
     */
    dispatchEvent(type: string, ...args: any[]): void;
    /**
     * 监听事件
     * @param type       事件类型
     * @param listener   回调函数
     * @param thisObject 回调执行对象
     */
    addEventListener(type: string, listener: Function, thisObject: any): void;
    /**
     * 移除事件
     * @param type       事件类型
     * @param listener   回调函数
     * @param thisObject 回调执行对象
     */
    removeEventListener(type: string, listener: Function, thisObject: any): void;
}
