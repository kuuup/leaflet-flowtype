type Coordinates = Array<number> | Array<Coordinates>;

type JSONValue = | string | number | boolean | null | JSONObject | JSONArray;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = Array<JSONValue>;

declare interface GeoJSON {
    type: 'Feature',
    properties: JSONObject,
    geometry: {
        type: string,
        coordinates: Coordinates
    }
}

declare type FeatureCollection = {
    type: 'FeatureCollection',
    features: Array<GeoJSON>
}
