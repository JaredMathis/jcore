import { string_is } from '../../string/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_set } from './set.mjs';
import { object_property_exists } from './exists.mjs';
export function object_property_change(f, property_name, value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    object_property_exists(f, property_name);
    object_property_set(f, property_name, value);
    metadata([]);
}