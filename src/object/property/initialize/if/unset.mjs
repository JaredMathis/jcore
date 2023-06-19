import { string_is } from '../../../../string/is.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_property_exists } from '../../exists.mjs';
import { object_property_initialize } from '../../initialize.mjs';
export function object_property_initialize_if_unset(object, property_name, initial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let ensure = false;
    if (object_property_exists(object, property_name)) {
        if (ensure) {
        }
    } else {
        object_property_initialize(object, property_name, initial_value);
    }
    metadata([]);
}