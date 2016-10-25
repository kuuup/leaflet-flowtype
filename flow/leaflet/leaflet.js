declare module leaflet {
    declare function map(id: string, options?: LeafletMapOptions): LeafletMap;
    declare function map(selector: HTMLElement, options?: LeafletMapOptions): LeafletMap;

    declare function latLng(latitude: number, longitude: number, altitude?: number): LeafletLatLng;
    declare function latLng(coords: Array<number>): LeafletLatLng;
    declare function latLng(coords: Array<Object>): LeafletLatLng;

    declare function icon(options: LeafletIconOptions): LeafletIcon;

    declare function geoJSON(data: GeoJSON | FeatureCollection | null, opts?: Object): LeafletGeoJSON;
    declare var GeoJSON: LeafletGeoJSON;

    declare function markerClusterGroup(opts: Object): LeafletMarkerClusterGroup;
    declare function marker(latLng: LeafletLatLng, opts?: LeafletMarkerOptions): LeafletMarker;
    declare function tileLayer(url: string, opts: Object): LeafletTileLayer;
    declare var control: LeafletControl;

    declare var Icon: LeafletIcon;
    declare function divIcon(opts: LeafletDivIconOptions): LeafletDivIcon;
    declare var DivIcon: LeafletDivIcon;
    declare var DomUtil: LeafletDomUtil;

    declare function point(x: number, y: number, round?: boolean): LeafletPoint;
    declare function point(coords: Array<number>): LeafletPoint;
    declare function point(coords: { x: number, y: number }): LeafletPoint;

    declare function svg(options?: LeafletRendererOptions): LeafletRenderer;
    declare function canvas(options?: LeafletRendererOptions): LeafletRenderer;

    declare function popup(options?: LeafletPopupOptions, source?: LeafletLayer<*>): LeafletPopup;

    declare var AwesomeMarkers: LeafletAwesomeMarkers;
}
