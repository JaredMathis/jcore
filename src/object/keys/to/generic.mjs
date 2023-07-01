import { object_property_initialize } from '../../property/initialize.mjs';
import { object_keys_each } from '../each.mjs';
export function object_keys_to_generic(options, lambda_map_key) {
    let mapped = {};
    object_keys_each(options, function v(value, key) {
        let key_mapped = lambda_map_key(key);
        object_property_initialize(mapped, key_mapped, value);
    });
    return mapped;
}