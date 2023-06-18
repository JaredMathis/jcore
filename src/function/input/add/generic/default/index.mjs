import { add_1 } from '../../../../../add/1.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_last_index } from '../../../../../list/last/index.mjs';
import { function_inputs } from '../../../../inputs.mjs';
export async function function_input_add_generic_default_index(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let inputs = await function_inputs(function_name);
    const input_index = list_last_index(inputs);
    return add_1(input_index);
}