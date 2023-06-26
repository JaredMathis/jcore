import { boolean_value_true } from '../boolean/value/true.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_set } from '../object/property/set.mjs';
export function value_set(value_object, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    let v = 'value';
    object_property_set(value_object, v, value);
    let v_2 = 'set';
    let v_3 = boolean_value_true();
    object_property_set(value_object, v_2, v_3);
    metadata([]);
}