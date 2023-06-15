import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_input_add } from '../../add.mjs';
export async function function_input_add_multiple_generic(function_name, inputs) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    for (let i of inputs) {
        await function_input_add(function_name, i);
    }
}