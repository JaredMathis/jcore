import {object_property_exists} from '../object/property/exists.mjs'
import {object_property_get} from '../object/property/get.mjs'
export function object_properties(object) {
    let property_name = 'getOwnPropertyNames';
    let default_value = []
    if (!object_property_exists(object, property_name)) {
        return default_value;
    }
    return object_property_get(object, property_name)();
}