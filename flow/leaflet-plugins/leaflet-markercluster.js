declare interface LeafletMarkerClusterEvent extends LeafletMouseEvent {
    layer?: LeafletMarkerCluster
}

declare interface LeafletMarkerCluster extends LeafletMarker {
    getChildCount(): number,
    getAllChildMarkers(): Array<LeafletMarker>,
    spiderify(): void,
    unspiderify(): void
}

declare interface LeafletMarkerClusterGroup extends LeafletFeatureGroup<LeafletMarkerClusterGroup> {
    addLayers(layers: Array<LeafletLayer<*>>): void,
    getVisibleParent(marker: ?LeafletMarker | ?LeafletMarkerCluster): LeafletMarker | LeafletMarkerCluster | null
}
