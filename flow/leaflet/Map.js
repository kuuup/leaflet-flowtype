declare interface LeafletMapOptions {

    preferCanvas?: boolean,

    // Control options
    attributionControl?: boolean,
    zoomControl?: boolean,

    // Interaction options
    closePopupOnClick?: boolean,
    zoomSnap?: number,
    zoomDelta?: number,
    trackResize?: boolean,
    boxZoom?: boolean,
    doubleClickZoom?: boolean,
    dragging?: boolean,

    // Map state options
    crs?: LeafletCRS,
    center?: LeafletLatLng,
    zoom?: number,
    minZoom?: number,
    maxZoom?: number,
    layers?: Array<LeafletLayer<*>>,
    maxBounds?: LeafletLatLngBounds,
    renderer?: LeafletRenderer,

    // Animation options
    fadeAnimation?: boolean,
    markerZoomAnimation?: boolean,
    transform3DLimit?: number,
    zoomAnimation?: boolean,
    zoomAnimationThreshold?: number,

    // Panning Inertia options
    inertia?: boolean,
    inertiaDeceleration?: number,
    inertiaMaxSpeed?: number,
    easeLinearity?: number,
    worldCopyJump?: boolean,
    maxBoundsViscosity?: number,

    // Keyboard navigation options
    keyboard?: boolean,
    keyboardPanDelta?: number,

    // Mousewheel options
    scrollWheelZoom?: boolean | string,
    wheelDebounceTime?: number,
    wheelPxPerZoomLevel?: number,

    // Touch interaction options
    tap?: boolean,
    tapTolerance?: number,
    touchZoom?: boolean | string,
    bounceAtZoomLimits?: boolean

}

declare interface LeafletLocateOptions {
    watch?: boolean,
    setView?: boolean,
    maxZoom?: number,
    timeout?: number,
    maximumAge?: number,
    enableHighAccuraxy: boolean
}

declare interface LeafletZoomOptions {
    animate?: boolean
}

declare interface LeafletPanOptions {
    anitmate?: boolean,
    duration?: number,
    easeLinearity?: number,
    noMoveStart?: boolean
}

declare interface LeafletZoomPanOptions extends LeafletZoomOptions, LeafletPanOptions {}

declare interface LeafletFitBoundsOptions extends LeafletZoomOptions, LeafletPanOptions {
    paddingTopLeft?: LeafletPoint,
    paddingBottomRight?: LeafletPoint,
    padding?: LeafletPoint,
    maxZoom?: number
}

declare interface LeafletMap extends LeafletEvented<LeafletMap> {

    boxZoom: LeafletHandler<*>,
    doubleClickZoom: LeafletHandler<*>,
    dragging: LeafletHandler<*>,
    keyboard: LeafletHandler<*>,
    scrollWheelZoom: LeafletHandler<*>,
    tap: LeafletHandler<*>,
    touchZoom: LeafletHandler<*>,

    // Methods
    getRenderer(layer: LeafletPath<*>): LeafletRenderer,

    // Methods for Layers and Controls
    addControl(control: LeafletControl): LeafletMap,
    removeControl(control: LeafletControl): LeafletMap,
    addLayer(layer: LeafletLayer<*>): LeafletMap,
    removeLayer(layer: LeafletLayer<*>): LeafletMap,
    hasLayer(layer: LeafletLayer<*>): boolean,
    eachLayer(fn: Function, context?: Object): LeafletMap,
    openPopup(popup: LeafletPopup): LeafletMap,
    openPopup(content: string | HTMLElement, latLng: LeafletLatLng, options?: LeafletPopupOptions): LeafletMap,
    closePopup(popup?: LeafletPopup): LeafletMap,
    openTooltip(tooltip: LeafletTooltip): LeafletMap,
    openPopup(content: string | HTMLElement, latLng: LeafletLatLng, options?: LeafletTooltipOptions): LeafletMap,
    closeTooltip(tooltip: LeafletTooltip): LeafletMap,

    //Methods for modifying map state
    setView(center: LeafletLatLng, zoom: ?number, options?: LeafletZoomPanOptions): LeafletMap,
    setZoom(zoom: number, options: LeafletZoomPanOptions): LeafletMap,
    zoomIn(delta?: number, options?: LeafletZoomOptions): LeafletMap,
    zoomOut(delta?: number, options?: LeafletZoomOptions): LeafletMap,
    setZoomAround(latLng: LeafletLatLng, zoom: number, options: LeafletZoomPanOptions): LeafletMap,
    setZoomAround(offset: LeafletPoint, zoom: number, options: LeafletZoomPanOptions): LeafletMap,
    fitBounds(bounds: LeafletLatLngBounds, options?: LeafletFitBoundsOptions): LeafletMap,
    fitWorld(options?: LeafletFitBoundsOptions): LeafletMap,
    panTo(latLng: LeafletLatLng, options?: LeafletPanOptions): LeafletMap,
    panBy(offset: LeafletPoint): LeafletMap,
    setMaxBounds(bounds: LeafletBounds): LeafletMap,
    setMinZoom(zoom: number): LeafletMap,
    setMaxZoom(zoom: number): LeafletMap,
    panInsideBounds(bounds: LeafletLatLngBounds, options?: LeafletPanOptions): LeafletMap,
    invalidateSize(options: LeafletZoomPanOptions): LeafletMap,
    invalidateSize(animate: boolean): LeafletMap,
    stop(): LeafletMap,
    flyTo(latLng: LeafletLatLng, zoom?: number, options?: LeafletZoomPanOptions): LeafletMap,
    flyToBounds(bounds: LeafletLatLngBounds, options?: LeafletFitBoundsOptions): LeafletMap,

    // Other methods
    addHandler(name: string, HandlerClass: Function): LeafletMap,
    remove(): LeafletMap,
    getPane(pane: string | HTMLElement): HTMLElement,
    getPanes(): Object,
    getContainer(): HTMLElement,
    whenReady(fn: Function, context?: Object): LeafletMap,

    // Methods for getting map state
    getCenter(): LeafletLatLng,
    getZoom(): number,
    getBounds(): LeafletLatLngBounds,
    getMinZoom(): number,
    getMaxZoom(): number,
    getBoundsZoom(bounds: LeafletLatLngBounds, inside?: boolean): number,
    getSize(): LeafletPoint,
    getPixelBounds(): LeafletBounds,
    getPixelOrigin(): LeafletPoint,
    getPixelWorldBounds(zoom?: number): LeafletBounds,

    // Conversion methods
    getZoomScale(toZoom: number, fromZoom: number): number,
    getScaleZoom(scale: number, fromZoom: number): number,
    project(latLng: LeafletLatLng, zoom: number): LeafletPoint,
    unproject(point: LeafletPoint, zoom: number): LeafletLatLng,
    layerPointToLatLng(point: LeafletPoint): LeafletLatLng,
    latLngToLayerPoint(latLng: LeafletLatLng): LeafletPoint,
    wrapLatLng(latLng: LeafletLatLng): LeafletLatLng,
    distance(latLng1: LeafletLatLng, latLng2: LeafletLatLng): number,
    containerPointToLayerPoint(point: LeafletPoint): LeafletPoint,
    layerPointToContainerPoint(point: LeafletPoint): LeafletPoint,
    containerPointToLatLng(point: LeafletPoint): LeafletLatLng,
    latLngToContainerPoint(latLng: LeafletLatLng): LeafletPoint,
    mouseEventToContainerPoint(ev: LeafletMouseEvent): LeafletPoint,
    mouseEventToLayerPoint(ev: LeafletMouseEvent): LeafletPoint,
    mouseEventToLatLng(ev: LeafletMouseEvent): LeafletLatLng,

    // Geolocation methods
    locate(options?: LeafletLocateOptions): LeafletMap,
    stopLocate(): LeafletMap
}
