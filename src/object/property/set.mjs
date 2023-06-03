import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../../string/is.mjs';
export function object_property_set(object, property_name, value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    object[property_name] = value;
    metadata([]);
}