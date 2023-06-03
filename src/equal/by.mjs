import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { equal } from '../equal.mjs';
import { function_is } from '../function/is.mjs';
export function equal_by(map, a, b) {
    arguments_assert(arguments, [
        function_is,
        tautology,
        tautology
    ]);
    return equal(map(a), map(b));
}