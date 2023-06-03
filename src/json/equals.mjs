import { equal_by } from '../equal/by.mjs';
import { json_to } from './to.mjs';
export function json_equals(a, b) {
    let map = json_to;
    return equal_by(map, a, b);
}