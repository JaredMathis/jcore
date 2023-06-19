import { object_property_initialize } from '../initialize.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
import { object_property_get } from '../get.mjs';
import { object_property_exists } from '../exists.mjs';
export function object_property_initialize_generic(object, property_name, ensure, initial_value) {
    if (object_property_exists(object, property_name)) {
        if (ensure) {
            let existing = object_property_get(object, property_name);
            assert(equal(existing, initial_value));
        }
    } else {
        object_property_initialize(object, property_name, initial_value);
    }
}