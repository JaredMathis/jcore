import { function_inputs_index_of_string } from '../../../../inputs/index/of/string.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { function_input_swap_first_to } from '../to.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_input_swap_first_to_named(function_name, input_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let index_string = await function_inputs_index_of_string(function_name, input_name);
    let result = await function_input_swap_first_to(function_name, index_string);
    return result;
}