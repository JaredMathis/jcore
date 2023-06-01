import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function object_property_set(object, property_name, value) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    object[property_name] = value;
    metadata([]);
}