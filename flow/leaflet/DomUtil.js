declare interface LeafletDomUtil {

    TRANSFORM: string,
    TRANSITION: string,
    
    get(id: string | HTMLElement): HTMLElement,
    getStyle(el: HTMLElement, styleAttrib: string): string,
    create(tagName: string, className?: string, container?: HTMLElement): HTMLElement,
    remove(el: HTMLElement): void,
    empty(el: HTMLElement): void,
    toFront(el: HTMLElement): void,
    toBack(el: HTMLElement): void,
    hasClass(el: HTMLElement, name: string): boolean,
    addClass(el: HTMLElement, name: string): void,
    removeClass(el: HTMLElement, name: string): void,
    setClass(el: HTMLElement, name: string): void,
    getClass(el: HTMLElement): string,
    setOpacity(el: HTMLElement, opacity: number): void,
    testProp(props: Array<string>): string | false,
    setTransform(el: HTMLElement, offset: LeafletPoint, scale?: number): void,
    setPosition(el: HTMLElement, position: LeafletPoint): void,
    getPosition(el: HTMLElement): LeafletPoint,
    disableTextSelection(): void,
    enableTextSelection(): void,
    disableImageDrag(): void,
    enableImageDrag(): void,
    preventOutline(el: HTMLElement): void,
    restoreOutline(): void
}
