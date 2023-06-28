import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function speed_now() {
    arguments_assert(arguments, []);
    let v = performance.now();
    return v;
    metadata([]);
}