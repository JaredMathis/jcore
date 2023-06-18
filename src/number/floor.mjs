import { number_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function number_floor(n) {
    arguments_assert(arguments, [number_is]);
    let v = Math.floor(n);
    return v;
}