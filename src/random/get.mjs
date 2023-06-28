import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function random_get() {
    arguments_assert(arguments, []);
    let v = Math.random();
    return v;
    metadata([]);
}