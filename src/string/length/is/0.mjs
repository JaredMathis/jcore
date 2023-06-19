import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_length } from '../../length.mjs';
export function string_length_is_0(value) {
    arguments_assert(arguments, [string_is]);
    return string_length(value) === 0;
}