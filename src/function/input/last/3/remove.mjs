import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_input_last_remove } from '../remove.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { range } from '../../../../range.mjs';
export async function function_input_last_3_remove(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    for (let i of range(3)) {
        await function_input_last_remove(function_name);
    }
}