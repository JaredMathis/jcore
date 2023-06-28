import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { number_zero_is } from '../../../number/zero/is.mjs';
import { not } from '../../../not.mjs';
export function integer_zero_not_is(a) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = number_zero_is(a);
    let v_2 = not(v);
    return v_2;
    metadata([]);
}