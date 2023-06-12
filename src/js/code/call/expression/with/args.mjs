import { js_code_join_comma } from '../../../join/comma.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_code_call_expression_with_args_code } from './args/code.mjs';
export function js_code_call_expression_with_args(call_expression_function_name, params) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let params_code2 = js_code_join_comma(params);
    const statment_code = js_code_call_expression_with_args_code(call_expression_function_name, params_code2);
    return statment_code;
}