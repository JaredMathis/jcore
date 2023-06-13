import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_input_add_generic } from './add/generic.mjs';
import { error } from '../../error.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_code_call_expression } from '../../js/code/call/expression.mjs';
export async function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let input_value_default = js_code_call_expression(function_name_get(error));
    await function_input_add_generic(function_name, input_name, input_value_default, error());
}