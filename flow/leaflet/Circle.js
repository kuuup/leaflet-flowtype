declare interface LeafletCircleOptions extends LeafletCircleMarkerOptions {

}

declare interface LeafletCircle extends LeafletPath<LeafletCircle> {
    toGeoJSON(): Object,
    setLatLng(latLng: LeafletLatLng): LeafletCircle,
    getLatLng(): LeafletLatLng,
    setRadius(radius: number): LeafletCircle,
    getBounds(): LeafletLatLngBounds
}
