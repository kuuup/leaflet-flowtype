declare interface LeafletImageOverlayOptions extends LeafletLayerOptions {
    opacity?: number,
    alt?: string,
    interactive?: boolean,
    attribution?: string,
    crossOrigin?: boolean
}

declare interface LeafletImageOverlay extends LeafletLayer<LeafletImageOverlay> {
    setOpacity(opacity: number): LeafletImageOverlay,
    bringToFront(): LeafletImageOverlay,
    bringtToBack(): LeafletImageOverlay,
    setUrl(url: string): LeafletImageOverlay
}
