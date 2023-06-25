import { equal } from '../../equal.mjs';
import { range } from '../../range.mjs';
export function string_similar_generic(other_get, range_count, target) {
    for (let i of range(range_count)) {
        let other = other_get(i);
        let v = equal(other, target);
        if (v) {
            return true;
        }
    }
    return false;
}