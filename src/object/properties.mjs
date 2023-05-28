import {object_property_invoke} from '../object/property/invoke.mjs'
export function object_properties(object) {
    let property_name = 'getOwnPropertyNames';
    let default_value = [];
    return object_property_invoke(default_value, object, property_name);
}
