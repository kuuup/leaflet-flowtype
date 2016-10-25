declare interface LeafletMouseEvent extends LeafletEvent {
    latlng: LeafletLatLng,
    layerPoint: LeafletPoint,
    containerPoint: LeafletPoint,
    originalEvent: Event
}
