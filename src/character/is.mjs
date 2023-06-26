import { and } from '../and.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
import { string_is } from '../string/is.mjs';
import { string_length_is_1 } from '../string/length/is/1.mjs';
export function character_is(value) {
    arguments_assert(arguments, [defined_is]);
    return and(string_is(value), string_length_is_1(value));
}