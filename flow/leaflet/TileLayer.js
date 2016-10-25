declare interface LeafletTileLayerOptions extends LeafletGridLayerOptions {
    minZoom?: number,
    maxZoom?: number,
    maxNativeZoom?: number,
    subdomains?: string | Array<string>,
    errorTileUrl?: string,
    zoomOffset?: number,
    tms?: boolean,
    zoomReverse?: boolean,
    detectRetina?: boolean,
    crossOrigin?: boolean
}

declare interface LeafletTileLayer extends LeafletGridLayer<LeafletTileLayer> {

    WMS: LeafletTileLayerWMS,

    setUrl(url: string, noRedraw?: boolean): LeafletTileLayer,
    createTiele(coords: Object, done?: Function): HTMLElement,

    // Extension methods
    getTIleUrl(coords: Object): string
}
