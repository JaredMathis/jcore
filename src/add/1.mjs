import { number_is } from '../number/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
export function add_1(value) {
    arguments_assert(arguments, [number_is]);
    let v = add(value, 1);
    return v;
    metadata([]);
}