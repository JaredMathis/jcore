import { equal } from '../../equal.mjs';
import { range } from '../../range.mjs';
export function string_similar_generic(other_get, range_count, target) {
    for (let i of range(range_count)) {
        let other = other_get(i);
        if (equal(other, target)) {
            return true;
        }
    }
    return false;
}