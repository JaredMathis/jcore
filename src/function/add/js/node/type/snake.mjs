import { function_exists } from '../../../../exists.mjs';
import { js_identifier_combine } from '../../../../../js/identifier/combine.mjs';
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
import { function_name_separator_append } from '../../../../name/separator/append.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
import { null_not_is } from '../../../../../null/not/is.mjs';
export async function function_add_js_node_type_snake(snake) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let prefix_2 = js_prefix_node_type();
    let camel_case = string_case_snake_to_camel(snake);
    let function_name_js_node_type = js_identifier_combine(prefix_2, snake);
    let v_3 = false;
    let v_1 = await function_add_string_prefix_camel_generic(prefix_2, camel_case, v_3);
    let v_4 = js_prefix_node_is();
    let prefix_1 = function_name_separator_append(v_4);
    let function_name_js_node_is = `${ prefix_1 }${ snake }`;
    let value = js_code_identifier_value();
    let v_5 = function_name_get(js_node_is_type);
    let v_6 = [
        value,
        js_code_call_expression(function_name_js_node_type)
    ];
    let expression = js_code_call_expression_with_args(v_5, v_6);
    let code_return_statment = js_code_return_statement(expression);
    let v_2;
    let v = await function_exists(function_name_js_node_is);
    if (v) {
        v_2 = null;
    } else {
        v_2 = await function_add_with_statement_code(function_name_js_node_is, code_return_statment);
        await function_input_named_value(function_name_js_node_is);
    }
    let v_7 = [
        v_1,
        v_2
    ];
    let v_8 = list_filter(v_7, null_not_is);
    return v_8;
}