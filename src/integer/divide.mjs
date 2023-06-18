import { integer_zero_not_is } from './zero/not/is.mjs';
import { integer_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export function integer_divide(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    assert(integer_zero_not_is(b));
    let result = a / b;
    assert(integer_is(result));
    return result;
}