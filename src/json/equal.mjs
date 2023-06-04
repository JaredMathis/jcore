import { json_to } from './to.mjs';
import { equal_by } from '../equal/by.mjs';
export function json_equal(filtered_a, filtered_b) {
    return equal_by(json_to, filtered_a, filtered_b);
}