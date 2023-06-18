import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_input_swap } from '../swap.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_swap_named(function_name, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_input_swap(function_name, index_from, index_to);
    return result;
}