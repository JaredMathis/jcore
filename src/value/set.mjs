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
    object_property_set(value_object, 'value', value);
    object_property_set(value_object, 'set', boolean_value_true());
    metadata([]);
}