declare interface LeafletTransformation {
    transform(point: LeafletPoint, scale?: number): LeafletPoint,
    untransform(point: LeafletPoint, scale?: number): LeafletPoint
}
