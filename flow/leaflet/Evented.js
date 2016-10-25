declare interface LeafletEvented<T> extends LeafletClass {
    on(type: string, fn: Function, context?: Object): T,
    on(eventMap: Object): T,
    off(type: string, fn: Function, context?: Object): T,
    off(): T,
    fire(type: string, data?: Object, propagate?: boolean): T,
    listens(type: string): boolean,
    once(type: string, fn: Function, context?: Object): T,
    once(eventMap: Object): T,
    addEventParent<U>(obj: LeafletEvented<U>): T,
    removeEventParent<U>(obj: LeafletEvented<U>): T,
    addEventListener(type: string, fn: Function, context?: Object): T,
    addEventListener(eventMap: Object): T,
    removeEventListener(type: string, fn: Function, context?: Object): T,
    clearAllEventListeners(): T,
    addOneTimeEventListener(type: string, fn: Function, context?: Object): T,
    addOneTimeEventListener(eventMap: Object): T,
    fireEvent(type: string, data?: Object, propagate?: boolean): T,
    hasEventListeners(type: string): boolean
}