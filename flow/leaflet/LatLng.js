declare interface LeafletLatLng {
    lat: number,
    lng: number,
    alt: number,
    equals(otherLatLng: LeafletLatLng): boolean,
    toString(): string,
    distanceTo(otherLatLng: LeafletLatLng): number,
    wrap(): LeafletLatLng,
    toBounds(sizeInMeters: number): LeafletLatLngBounds
}
