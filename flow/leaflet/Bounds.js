declare interface LeafletBounds {
    min: LeafletPoint,
    max: LeafletPoint,

    extend(point: LeafletPoint): LeafletBounds,
    getCenter(round?: boolean): LeafletPoint,
    getBottomLeft(): LeafletPoint,
    getTopRight(): LeafletPoint,
    getSize(): LeafletPoint,
    contains(otherBounds: LeafletBounds): boolean,
    contains(point: LeafletPoint): boolean,
    intersects(otherBounds: LeafletBounds): boolean,
    overlaps(otherBounds: LeafletBounds): boolean
}
