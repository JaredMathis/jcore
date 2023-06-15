import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_input_add_multiple } from '../multiple.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_add_multiple_prefix(function_name, inputs_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await function_input_add_multiple(function_name, inputs_string);
    return result;
}