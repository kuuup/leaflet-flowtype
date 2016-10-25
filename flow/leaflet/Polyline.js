declare interface LeafletPolylineOptions extends LeafletPathOptions {
    smoothFactor: number,
    noClip: boolean
}

declare interface LeafletPolylineInterface<T> extends LeafletPath<T> {
    toGeoJSON(): Object,
    getLatLngs(): Array<LeafletLatLng>,
    setLatLngs(latLngs: Array<LeafletLatLng>): T,
    isEmpty(): boolean,
    getCenter(): LeafletLatLng,
    getBounds(): LeafletLatLngBounds,
    addLatLng(latLng: LeafletLatLng): T
}


declare interface LeafletPolyline extends LeafletPolylineInterface<LeafletPolyline> {

}
