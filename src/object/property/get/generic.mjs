import { assert } from '../../../assert.mjs';
export function object_property_get_generic(lambda, object, property_name) {
    let v = lambda(object, property_name);
    assert(v);
    return object[property_name];
}