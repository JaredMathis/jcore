import { js_list_add_identifier } from '../../../../js/list/add/identifier.mjs';
import { list_add } from '../../../../list/add.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { js_parse_expression } from '../../../../js/parse/expression.mjs';
import { refactor_input_generic } from '../../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_swap_last_2 } from '../../../../list/swap/last/2.mjs';
import { error } from '../../../../error.mjs';
export async function refactor_input_swap_last_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration, input_value_default} = args;
    await refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change);
    function arguments_assert_args_change(arguments_assert_args) {
        list_swap_last_2(arguments_assert_args)
    }
    function params_change(params) {
        list_swap_last_2(params)
    }
    function args_additional_get() {
        error()
        const args_additional = {
        };
        return args_additional;
    }
}