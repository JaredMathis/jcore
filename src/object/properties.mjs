import {array_add} from '../array/add.mjs'
import {object_property_get} from '../object/property/get.mjs'
export function object_properties(object) {
    let result = [];
    for (let property in object) {
        let r = object_property_get(object, property);
        array_add(result, r);
    }
    return result;
}