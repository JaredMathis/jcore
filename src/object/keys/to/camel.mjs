import { object_property_initialize } from '../../property/initialize.mjs';
import { string_case_snake_to_camel } from '../../../string/case/snake/to/camel.mjs';
import { object_keys_each } from '../each.mjs';
export function object_keys_to_camel(options) {
    let mapped = {};
    object_keys_each(options, function v(value, key) {
        let key_mapped = string_case_snake_to_camel(key);
        object_property_initialize(mapped, key_mapped, value);
    });
    return mapped;
}