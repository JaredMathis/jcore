import { function_is } from '../../../function/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { refactor_input_generic } from '../generic.mjs';
export async function refactor_input_generic_simple(args, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    let {function_declaration} = args;
    console.log({args})
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
    metadata([]);
}