import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_trim(input) {
    arguments_assert(arguments, [string_is]);
    let v = input.trim();
    return v;
}