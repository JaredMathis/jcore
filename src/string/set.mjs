import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
export function string_set(s, index, value) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        character_is
    ]);
    error('todo: string_set');
}