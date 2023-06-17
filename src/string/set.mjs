import { string_add_multiple } from './add/multiple.mjs';
import { character_is } from '../character/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
import { string_take } from './take.mjs';
import { string_skip } from './skip.mjs';
export function string_set(input, index, value) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        character_is
    ]);
    return string_add_multiple([
        string_take(input, index),
        value,
        string_skip(input, index + 1)
    ]);
}