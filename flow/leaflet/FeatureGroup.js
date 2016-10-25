declare interface LeafletFeatureGroup<T> extends LeafletLayerGroup<LeafletFeatureGroup<T> > {
    setStyle<T>(style: LeafletPathOptions): T,
    bringToFront<T>(): T,
    bringToBack<T>(): T,
    getBounds(): LeafletLatLngBounds
}
