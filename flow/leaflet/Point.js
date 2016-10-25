declare interface LeafletPoint {
    x: number,
    y: number,
    clone(): LeafletPoint,
    add(otherPoint: LeafletPoint): LeafletPoint,
    subtract(otherPoint: LeafletPoint): LeafletPoint,
    divideBy(num: number): LeafletPoint,
    multiplyBy(num: number): LeafletPoint,
    scaleBy(scale: LeafletPoint): LeafletPoint,
    unscaleBy(scale: LeafletPoint): LeafletPoint,
    round(): LeafletPoint,
    floor(): LeafletPoint,
    ceil(): LeafletPoint,
    distanceTo(otherPoint: LeafletPoint): number,
    equals(otherPoint: LeafletPoint): boolean,
    contains(otherPoint: LeafletPoint): boolean,
    toString(): string
}
