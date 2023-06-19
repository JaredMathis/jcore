import { string_is } from '../../../../string/is.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { object_property_exists } from '../../exists.mjs';
import { object_property_initialize } from '../../initialize.mjs';
import { assert } from '../../../../assert.mjs';
import { equal } from '../../../../equal.mjs';
import { object_property_get } from '../../get.mjs';
export function object_property_initialize_if_unset(object, property_name, initial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let ensure = false;
    if (object_property_exists(object, property_name)) {
        if (ensure) {
            let existing = object_property_get(object, property_name)
            assert(equal(existing, initial_value))
        }
    } else {
        object_property_initialize(object, property_name, initial_value);
    }
    metadata([]);
}