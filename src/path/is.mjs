import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from '../string/is.mjs';
export function path_is(value) {
    arguments_assert(arguments, [string_is]);
    return true;
}