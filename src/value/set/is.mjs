import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { defined_is } from '../../defined/is.mjs';
export function value_set_is(value_object) {
    arguments_assert(arguments, [defined_is]);
    let v = 'set';
    let set = object_property_get(value_object, v);
    return set;
    metadata([]);
}