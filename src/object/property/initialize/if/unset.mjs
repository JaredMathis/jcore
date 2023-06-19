import { object_property_initialize_generic } from '../generic.mjs';
import { string_is } from '../../../../string/is.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
export function object_property_initialize_if_unset(object, property_name, initial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let ensure = false;
    object_property_initialize_generic(object, property_name, initial_value, ensure);
    metadata([]);
}