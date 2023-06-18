import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { integer_is } from '../is.mjs';
export function integer_zero_is(a) {
    arguments_assert(arguments, [integer_is]);
    return equal(a, 0);
}