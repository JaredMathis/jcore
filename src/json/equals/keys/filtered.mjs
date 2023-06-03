import { json_to } from '../../to.mjs';
import { equal_by } from '../../../equal/by.mjs';
import { object_keys_without } from '../../../object/keys/without.mjs';
export function json_equals_keys_filtered(a, b, filter) {
    let filtered_a = object_keys_without(a, filter);
    let filtered_b = object_keys_without(b, filter);
    return equal_by(json_to, filtered_a, filtered_b);
}