declare type SVGElement = Object;

declare interface LeafletSVGOptions extends LeafletRendererOptions {

}

declare interface LeafletSVG extends LeafletRenderer {
    static create(name: string): SVGElement,
    static pointsToPath(rings: Array<LeafletPoint>, closed: boolean): string
}
