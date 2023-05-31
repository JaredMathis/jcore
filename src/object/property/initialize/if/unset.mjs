import { metadata } from '../../../../metadata.mjs';
import { object_property_exists } from '../../exists.mjs';
import { object_property_initialize } from '../../initialize.mjs';
export function object_property_initialize_if_unset(object, property_name, initial_value) {
    if (object_property_exists(object, property_name)) {
        return;
    }
    object_property_initialize(object, property_name, initial_value);
    metadata([]);
}