import { js_code_call_expression } from '../../../../js/code/call/expression.mjs';
import { function_input_named_value } from '../../../input/named/value.mjs';
import { js_node_is_type } from '../../../../js/node/is/type.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { js_code_call_expression_with_args } from '../../../../js/code/call/expression/with/args.mjs';
import { js_code_identifier_value } from '../../../../js/code/identifier/value.mjs';
import { string_case_camel_to_snake } from '../../../../string/case/camel/to/snake.mjs';
import { function_add_with_statement_code } from '../../with/statement/code.mjs';
import { js_code_return_statement } from '../../../../js/code/return/statement.mjs';
import { js_code_expression_string } from '../../../../js/code/expression/string.mjs';
import { function_add_string_prefix_camel_generic } from '../../string/prefix/camel/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_js_node_type(camel_case) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let prefix_2 = 'js_node_type';
    let v = await function_add_string_prefix_camel_generic(prefix_2, camel_case);
    let prefix_1 = 'js_node_is_';
    let snake = string_case_camel_to_snake(camel_case);
    let js_node_is_function_name = `${ prefix_1 }${ snake }`;
    let value = js_code_identifier_value();
    let expression = js_code_call_expression_with_args(function_name_get(js_node_is_type), [
        value,
        js_code_call_expression()
    ]);
    let code_return_statment = js_code_return_statement(expression);
    let v_2 = await function_add_with_statement_code(js_node_is_function_name, code_return_statment);
    await function_input_named_value(js_node_is_function_name);
    return [v, v_2];
}