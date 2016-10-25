declare class L {
    static map(id: string, options?: LeafletMapOptions): LeafletMap;
    static map(selector: HTMLElement, options?: LeafletMapOptions): LeafletMap;

    static latLng(latitude: number, longitude: number, altitude?: number): LeafletLatLng;
    static latLng(coords: Array<number>): LeafletLatLng;
    static latLng(coords: Array<Object>): LeafletLatLng;

    static icon(options: LeafletIconOptions): LeafletIcon;

    static geoJSON(data: GeoJSON | FeatureCollection | null, opts?: Object): LeafletGeoJSON;
    static GeoJSON: LeafletGeoJSON;
    static markerClusterGroup(opts: Object): LeafletMarkerClusterGroup;
    static marker(latLng: LeafletLatLng, opts?: LeafletMarkerOptions): LeafletMarker;
    static tileLayer(url: string, opts: Object): LeafletTileLayer;
    static control: LeafletControl;

    static Icon: LeafletIcon;
    static divIcon(opts: LeafletDivIconOptions): LeafletDivIcon;
    static DivIcon: LeafletDivIcon;
    static DomUtil: LeafletDomUtil;

    static point(x: number, y: number, round?: boolean): LeafletPoint;
    static point(coords: Array<number>): LeafletPoint;
    static point(coords: { x: number, y: number }): LeafletPoint;

    static svg(options?: LeafletRendererOptions): LeafletRenderer;
    static canvas(options?: LeafletRendererOptions): LeafletRenderer;

    static popup(options?: LeafletPopupOptions, source?: LeafletLayer<*>): LeafletPopup;

    static AwesomeMarkers: LeafletAwesomeMarkers;
}
