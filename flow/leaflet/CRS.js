declare interface LeafletCRS {
    latLngToPoint(latLng: LeafletLatLng, zoom: number): LeafletPoint,
    pointToLatLng(point: LeafletPoint, zoom: number): LeafletLatLng,
    project(latLng: LeafletLatLng): LeafletPoint,
    unproject(point: LeafletPoint): LeafletLatLng,
    scale(zoom: number): number,
    zoom(scale: number): number,
    getProjectedBounds(zoom: number): LeafletBounds,
    distance(latLng1: LeafletLatLng, latLng2: LeafletLatLng): number,
    wrapLatLng(latLng: LeafletLatLng): LeafletLatLng
}
