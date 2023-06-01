import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { object_property_set } from '../object/property/set.mjs';
export function value_set(value_object, value) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    object_property_set(value_object, 'value', value);
    object_property_set(value_object, 'set', true);
    metadata([]);
}