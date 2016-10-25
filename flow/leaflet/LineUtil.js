declare interface LeafletLineUtil {
    simplify(points: Array<LeafletPoint>, tolerance: number): Array<LeafletPoint>,
    pointToSegmentDistance(p: LeafletPoint, p1: LeafletPoint, p2: LeafletPoint): number,
    closestPointOnSegment(p: LeafletPoint, p1: LeafletPoint, p2: LeafletPoint): number,
    clipSegment(a: LeafletPoint, b: LeafletPoint, bounds: LeafletBounds, useLastCode?: boolean, round?: boolean) Array<LeafletPoint> | boolean
}
