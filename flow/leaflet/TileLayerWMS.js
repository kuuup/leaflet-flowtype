declare interface LeafletTileLayerWMSOptions extends LeafletTileLayerOptions {
    layers: string,
    styles?: string,
    format?: string,
    transparent?: boolean,
    version?: string,
    crs?: LeafletCRS,
    uppercase?: boolean
}

declare interface LeafletTileLayerWMS extends LeafletTileLayer {
    setParams(params: Object, noRedraw?: boolean): LeafletTileLayerWMS
}
