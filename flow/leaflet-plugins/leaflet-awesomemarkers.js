declare interface LeafletAwesomeMarkersOptions {
    icon: string,
    markerColor?: string,
    prefix?: string
}

declare interface LeafletAwesomeMarkers {
    icon(options: LeafletAwesomeMarkersOptions): LeafletIcon
}
