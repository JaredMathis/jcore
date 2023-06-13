import { js_list_add_identifier } from '../../../../js/list/add/identifier.mjs';
import { list_add } from '../../../../list/add.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { js_parse_expression } from '../../../../js/parse/expression.mjs';
import { refactor_input_generic } from '../../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_swap_last_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, input_type} = args;
    let {function_declaration, input_value_default} = args;
    await refactor_input_generic(args, function_declaration, input_value_default, params_change, arguments_assert_args_change);
    function arguments_assert_args_change(arguments_assert_args) {
        let type = js_parse_expression(function_name_get(input_type));
        list_add(arguments_assert_args, type);
    }
    function params_change(params) {
        js_list_add_identifier(params, input_name);
    }
}