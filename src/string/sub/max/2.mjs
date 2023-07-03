import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { string_sub_max } from '../max.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function string_sub_max_2(left, right) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = string_sub_max(left, right);
    return result;
}