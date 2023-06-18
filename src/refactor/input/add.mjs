import { error } from '../../error.mjs';
import { refactor_input_generic } from './generic.mjs';
import { js_list_add_identifier } from '../../js/list/add/identifier.mjs';
import { js_parse_expression } from '../../js/parse/expression.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { list_add } from '../../list/add.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, input_type, input_index} = args;
    let {function_declaration, input_value_default} = args;
    await refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change);
    function arguments_assert_args_change(arguments_assert_args) {
        let type = js_parse_expression(input_type);
        list_add(arguments_assert_args, type);
    }
    function params_change(params) {
        js_list_add_identifier(params, input_name, error());
    }
    function args_additional_get() {
        let input_value_expression = js_parse_expression(input_value_default);
        const args_additional = { args_change };
        function args_change(args) {
            list_add(args, input_value_expression);
        }
        return args_additional;
    }
}