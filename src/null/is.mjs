import { equal } from '../equal.mjs';
export function null_is(result) {
    let v = equal(result, null);
    return v;
}