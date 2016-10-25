declare type LeafletGeoJSONOptions = {
    pointToLayer?: Function,
    style?: Function,
    onEachFeature?: Function,
    filter?: Function,
    coordsToLatLng?: Function
}

declare interface LeafletGeoJSON extends LeafletFeatureGroup<LeafletGeoJSON> {

    feature: Object,
    
    addData(data: GeoJSON): LeafletGeoJSON,
    resetStyle(layer: LeafletLayer<*>): LeafletGeoJSON,
    geometryToLayer(featureData: Object, options?: LeafletGeoJSONOptions): LeafletGeoJSON,
    coordsToLatLng(coords: Array<number>): LeafletLatLng,
    coordsToLatLng(coords: Array<number>, levelsDeep?: number, coordsToLatLng?: Function): Array<*>,
    latLngToCoords(latLng: LeafletLatLng): Array<*>,
    latLngToCoords(latLng: LeafletLatLng, levelsDeep?: number, closed?: boolean): Array<*>,
    asFeature(geoJSON: Object): Object
}
