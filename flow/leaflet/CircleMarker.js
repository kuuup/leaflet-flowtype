declare interface LeafletCircleMarkerOptions extends LeafletPathOptions {
    radius: number
}

declare interface LeafletCircleMarker extends LeafletPath<LeafletCircleMarker> {
    static toGeoJSON(): Object,
    static setLatLng(latLng: LeafletLatLng): LeafletCircleMarker,
    static getLatLng(): LeafletLatLng,
    static setRadius(radius: number): LeafletCircleMarker,
    static getRadius(): number
}
