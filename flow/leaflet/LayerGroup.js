declare interface LeafletLayerGroup<T> extends LeafletLayer<T> {
    toGeoJSON(): Object,
    addLayer(layer: LeafletLayer<*>): T,
    removeLayer(layer: LeafletLayer<*>): T,
    removeLayer(id: number): T,
    hasLayer(layer: LeafletLayer<*>): boolean,
    clearLayers(): T,
    invoke(methodName: string, params?: any): T,
    eachLayer(fn: Function, context?: Object): T,
    getLayer(id: number): LeafletLayer<*>,
    getLayers(): Array<$Subtype<LeafletLayer<*>>>,
    setZIndex(zIndex: number): T,
    getLayerId(layer: LeafletLayer<*>): number
}
