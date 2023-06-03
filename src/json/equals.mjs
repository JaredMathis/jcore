import { equal_by } from '../equal/by.mjs';
import { json_to } from './to.mjs';
export function json_equals(a, b) {
    return json_equals_keys_filtered(a, b);
}

function json_equals_keys_filtered(a, b, filtered) {
    let map = json_to;
    return equal_by(map, a, b);
}
