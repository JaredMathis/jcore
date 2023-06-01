import { string_underscore } from '../underscore.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_underscore_is(c) {
    arguments_assert(arguments, [string_is]);
    return c === string_underscore();
}