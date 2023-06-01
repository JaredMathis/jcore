import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function object_property_remove(object, property_name) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    delete object[property_name];
    metadata([]);
}