declare interface LeafletMarkerOptions extends LeafletInteractiveLayerOptions {
    icon?: LeafletIcon,
    draggable?: boolean,
    keyboard?: boolean,
    title?: string,
    alt?: string,
    sIndexOffset?: number,
    opacity?: number,
    riseOnHover?: boolean,
    riseOffset?: number,
    pane?: string
}

declare interface LeafletMarkerInterface<T> extends LeafletLayer<T> {

    _icon: HTMLElement;

    dragging: LeafletHandler<*>,
    feature: Object,
    options: LeafletMarkerOptions,

    getLatLng(): LeafletLatLng,
    setLatLng(latLng: LeafletLatLng): T,
    setZIndexOffset(offset: number): T,
    setIcon(icon: LeafletIcon): T,
    setOpacity(opacity: number): T,
    toGeoJSON(): Object

}

declare interface LeafletMarker extends LeafletMarkerInterface<LeafletMarker> {
    properties?: Object // personal use
}
