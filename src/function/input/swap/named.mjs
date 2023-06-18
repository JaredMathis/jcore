import { function_inputs_index_of_string } from '../../inputs/index/of/string.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_input_swap } from '../swap.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_input_swap_named(function_name, input_name_from, input_name_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let index_from = await function_inputs_index_of_string(function_name, input_name_from);
    let index_to = await function_inputs_index_of_string(function_name, input_name_to);
    let result = await function_input_swap(function_name, index_from, index_to);
    return result;
}