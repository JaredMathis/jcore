import { boolean_is } from './boolean/is.mjs';
import { error } from './error.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function not(b) {
    arguments_assert(arguments, [boolean_is]);
    error('todo: not');
}