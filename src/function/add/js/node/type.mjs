import { function_add_string_prefix_camel_generic } from '../../string/prefix/camel/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_js_node_type(camel_case) {
    arguments_assert(arguments, [arguments_assert_todo]);

    let expression = js_code_expression_string(string_value);
    let code_return_statment = js_code_return_statement(expression);
    let v_2 = await function_add_with_statement_code(function_name, v);

    let prefix = 'js_node_type';
    let v = await function_add_string_prefix_camel_generic(prefix, camel_case);
    return v;
}