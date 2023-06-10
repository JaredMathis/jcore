import { string_length } from '../length.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_empty_is(s) {
    arguments_assert(arguments, [string_is]);
    return string_length(s) === 0;
}