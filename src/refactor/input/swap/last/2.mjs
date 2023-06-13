import { refactor_input_generic } from '../../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_swap_last_2 } from '../../../../list/swap/last/2.mjs';
export async function refactor_input_swap_last_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_swap_last_2;
    let {function_declaration} = args;
    await refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change);
    function arguments_assert_args_change(arguments_assert_args) {
        lambda(arguments_assert_args);
    }
    function params_change(params) {
        lambda(params);
    }
    function args_additional_get() {
        const args_additional = { args_change };
        function args_change(args) {
            lambda(args);
        }
        return args_additional;
    }
}