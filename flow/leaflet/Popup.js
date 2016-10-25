declare interface LeafletPopupOptions extends LeafletDivOverlayOptions {
    maxWidth?: number,
    minWidth?: number,
    maxHeight?: number,
    autoPan?: boolean,
    autoPanPaddingTopLeft?: LeafletPoint,
    autoPanPaddingBottomRight?: LeafletPoint,
    autoPanPadding?: LeafletPoint,
    keepInView?: boolean,
    closeButton?: boolean,
    autoClose?: boolean,
    className?: string
}

declare interface LeafletPopup extends LeafletDivOverlay<LeafletPopup> {
    getLatLng(): LeafletLatLng,
    setLatLng(latLng: LeafletLatLng): LeafletPopup,
    getContent(): string | HTMLElement,
    setContent(htmlContent: string | HTMLElement | Function): LeafletPopup,
    getElement(): string | HTMLElement,
    update(): void,
    isOpen(): boolean,
    bringToFront(): LeafletPopup,
    bringtToBack(): LeafletPopup,
    openOn(map: LeafletMap): LeafletPopup
}
