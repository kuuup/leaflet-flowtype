declare type LeafletPathOptions = {
    stroke?: boolean,
    color?: string,
    weight?: number,
    opacity?: number,
    lineCap?: string,
    lineJoin?: string,
    dashArray?: string,
    dashOffset?: string,
    fill?: boolean,
    fillColor?: string,
    fillOpacity?: number,
    fillRule?: string,
    renderer?: LeafletRenderer,
    className?: string
}

declare interface LeafletPath<T> extends LeafletLayer<T> {
    redraw(): T,
    setStyle(style: LeafletPathOptions): T,
    bringToFront(): T,
    bringToBack(): T
}
