import { function_inputs } from '../../../inputs.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
import { function_input_add_at } from '../at.mjs';
export async function function_input_add_last_before(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = await function_inputs(input_name);
    let last_index = list_last_index(inputs);
    await function_input_add_at(function_name, input_name, last_index);
}