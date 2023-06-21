import { string_case_snake_to_camel } from '../../../../../string/case/snake/to/camel.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_input_named_value } from '../../../../input/named/value.mjs';
import { function_add_with_statement_code } from '../../../with/statement/code.mjs';
import { js_code_return_statement } from '../../../../../js/code/return/statement.mjs';
import { js_code_call_expression } from '../../../../../js/code/call/expression.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
import { function_name_get } from '../../../../name/get.mjs';
import { js_code_call_expression_with_args } from '../../../../../js/code/call/expression/with/args.mjs';
import { js_code_identifier_value } from '../../../../../js/code/identifier/value.mjs';
import { js_prefix_node_is } from '../../../../../js/prefix/node/is.mjs';
import { function_add_string_prefix_camel_generic } from '../../../string/prefix/camel/generic.mjs';
import { js_prefix_node_type } from '../../../../../js/prefix/node/type.mjs';
import { function_name_separator_combine } from '../../../../name/separator/combine.mjs';
export async function function_add_js_node_type_snake(snake) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let prefix_2 = js_prefix_node_type();
    let camel_case = string_case_snake_to_camel(snake);
    let function_name_js_node_type = await function_add_string_prefix_camel_generic(prefix_2, camel_case, false);
    let prefix_1 = function_name_separator_combine(js_prefix_node_is());
    let js_node_is_function_name = `${ prefix_1 }${ snake }`;
    let value = js_code_identifier_value();
    let expression = js_code_call_expression_with_args(function_name_get(js_node_is_type), [
        value,
        js_code_call_expression(function_name_js_node_type)
    ]);
    let code_return_statment = js_code_return_statement(expression);
    let v_2 = await function_add_with_statement_code(js_node_is_function_name, code_return_statment);
    await function_input_named_value(js_node_is_function_name);
    return [
        function_name_js_node_type,
        v_2
    ];
}