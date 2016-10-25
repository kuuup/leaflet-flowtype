declare interface LeafletUtil {

    lastId: number,
    emptyImageUrl: string,

    extend(dest: Object, src?: Object): Object,
    create(proto: Object, properties?: Object): Object,
    bind(fn: Function): Function,
    stamp(obj: Object): number,
    throttle(fn: Function, time: number, context: Object): Function,
    wrapNum(num: number, range: Array<number>, includeMax?: boolean): number,
    falseFn(): Function,
    formatNum(num: number, digits?: number): number,
    trim(str: string): string,
    splitWords(str: string): Array<string>,
    setOptions(obj: Object, options: Object): Object,
    getParamString(obj: Object, existingUrl?: string, uppercase?: boolean): string,
    template(str: string, data: Object): String,
    isArray(obj: any): boolean,
    indexOf(array: Array<any>): number,
    requestAnimFrame(fn: Function, context?: Object, immediate?: boolean): number,
    cancelAnimFrame(id: number): void
}
