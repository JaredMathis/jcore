import { defined_is } from '../../defined/is.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
if (false)
    defined_is;
export function object_property_set(object, property_name, value) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    object[property_name] = value;
    metadata([]);
}