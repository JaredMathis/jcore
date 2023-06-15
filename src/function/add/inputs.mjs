import { function_input_add_multiple } from '../input/add/multiple.mjs';
import { function_add } from '../add.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_add_inputs(function_name, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await function_add(function_name);
    await function_input_add_multiple(inputs_string, function_name);
}