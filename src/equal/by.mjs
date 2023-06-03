import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { equal } from '../equal.mjs';
import { function_is } from '../function/is.mjs';
import { defined_is } from '../defined/is.mjs';
export function equal_by(map, a, b) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        defined_is
    ]);
    return equal(map(a), map(b));
}