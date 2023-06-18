import { function_inputs } from '../../../inputs.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_input_swap_last_2 } from '../../swap/last/2.mjs';
import { function_input_add } from '../../add.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_add_last_before(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let inputs = await function_inputs(input_name);
    await function_input_add(function_name, input_name);
    await function_input_swap_last_2(function_name);
}