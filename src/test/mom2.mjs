import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function test_mom2(input) {
    arguments_assert(arguments, [string_is]);
    return "hello " + input;
}