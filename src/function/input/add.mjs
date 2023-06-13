import { function_input_value_default } from './value/default.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_input_add_generic } from './add/generic.mjs';
import { function_name_get } from '../name/get.mjs';
export async function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let input_value_default = function_input_value_default();
    await function_input_add_generic(function_name, input_name, function_name_get(arguments_assert_todo), input_value_default);
}