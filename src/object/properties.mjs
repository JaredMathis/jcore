import {object_property_exists} from '../object/property/exists.mjs'
import {object_property_get} from '../object/property/get.mjs'
export function object_properties(object) {
    let property_name = 'getOwnPropertyNames';
    let default_value = [];
    return object_property_invoke(default_value, object, property_name);
}
