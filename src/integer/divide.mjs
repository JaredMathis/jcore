import { equal } from '../equal.mjs';
import { not } from '../not.mjs';
import { integer_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export function integer_divide(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    assert(not(equal(a, 0)));
    return a / b;
}