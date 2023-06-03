import { equal } from '../equal.mjs';
export function equal_by(map, a, b) {
    return equal(map(a), map(b));
}