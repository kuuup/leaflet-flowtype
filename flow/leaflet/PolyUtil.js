declare interface PolyUtil {
    clipPolygon(points: Array<LeafletPoint>, bounds: LeafletBounds, round?: boolean): Array<LeafletPoint>
}
