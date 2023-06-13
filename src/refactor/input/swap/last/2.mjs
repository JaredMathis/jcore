import { refactor_input_generic } from '../../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { list_swap_last_2 } from '../../../../list/swap/last/2.mjs';
export async function refactor_input_swap_last_2(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda;
    let {function_declaration} = args;
    await refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change);
    function arguments_assert_args_change(arguments_assert_args) {
        list_swap_last_2(arguments_assert_args);
    }
    function params_change(params) {
        list_swap_last_2(params);
    }
    function args_additional_get() {
        const args_additional = { args_change };
        function args_change(args) {
            list_swap_last_2(args);
        }
        return args_additional;
    }
}