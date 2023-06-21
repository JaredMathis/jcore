import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_combine(result, s) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return result + s;
}