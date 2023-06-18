import { string_is } from '../../../string/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get } from '../get.mjs';
import { object_property_initialize_if_unset } from '../initialize/if/unset.mjs';
export function object_property_get_initialize(data, property_name, intial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    object_property_initialize_if_unset(data, property_name, intial_value);
    let v = object_property_get(data, property_name);
    return v;
    metadata([]);
}