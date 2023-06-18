import { string_to } from '../../../../../string/to.mjs';
import { list_find_index } from '../../../../../list/find/index.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { function_input_swap_first_to } from '../to.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_inputs } from '../../../../inputs.mjs';
export async function function_input_swap_first_to_named(function_name, input_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    let inputs = await function_inputs(function_name);
    let index = list_find_index(inputs, input_name);
    let index_string = string_to(index);
    let result = await function_input_swap_first_to(function_name, index_string);
    return result;
}