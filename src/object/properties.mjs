import {object_property_exists} from '../object/property/exists.mjs'
export function object_properties(object) {
    let property_name = 'getOwnPropertyNames';
    if (!object_property_exists(object, property_name)) {
        return [];
    }
    return object[property_name]();
}