import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_combine } from '../string/combine.mjs';
export function ish_greet(person_name) {
    arguments_assert(arguments, [string_is]);
    return string_combine('hello ', person_name);
}