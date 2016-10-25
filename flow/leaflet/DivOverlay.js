declare interface LeafletDivOverlayOptions {
    offset?: LeafletPoint,
    className?: string,
    pane?: string
}

declare interface LeafletDivOverlay<T> extends LeafletLayer<T> { }
