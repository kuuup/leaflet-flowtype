declare interface LeafletLayerOptions {
    pane?: string
}

declare interface LeafletLayer<T> extends LeafletEvented<T> {
    getBounds(): LeafletLatLngBounds,
    addTo(map: LeafletMap): T,
    remove(): T,
    removeFrom(map: LeafletMap): T,

    // Popup methods
    bindPopup(content: string | HTMLElement | Function | LeafletPopup, options?: LeafletPopupOptions): T,
    unbindPopup(): T,
    openPopup(latLng?: LeafletLatLng): T,
    closePopup(): T,
    togglePopup(): T,
    isPopupOpen(): boolean,
    setPopupContent(content: string | HTMLElement | Function | LeafletPopup, options?: LeafletPopupOptions): T,
    getPopup(): LeafletPopup,

    // Tooltip methods
    bindTooltip(content: string | HTMLElement | Function | LeafletTooltip, options?: LeafletTooltipOptions): T,
    unbindTooltip(): T,
    openTooltip(latLng?: LeafletLatLng): T,
    closeTooltip(): T,
    toggleTooltip(): T,
    isTooltipOpen(): boolean,
    setTooltipContent(content: string | HTMLElement | Function | LeafletTooltip, options?: LeafletTooltipOptions): T,
    getTooltip(): LeafletTooltip,

    // Extension methods
    onAdd(map: LeafletMap): T,
    onRemove(map: LeafletMap): T,
    getEvents(): Object,
    getAttribution(): string,
    beforeAdd(map: LeafletMap): T
}
