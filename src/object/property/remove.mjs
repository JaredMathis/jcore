import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { defined_is } from '../../defined/is.mjs';
import { string_is } from '../../string/is.mjs';
export function object_property_remove(object, property_name) {
    arguments_assert(arguments, [
        defined_is,
        string_is
    ]);
    delete object[property_name];
    metadata([]);
}