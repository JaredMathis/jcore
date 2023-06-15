import { js_function_declaration_to_params } from '../../../../js/function/declaration/to/params.mjs';
import { refactor_input_swap_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { range } from '../../../../range.mjs';
import { list_length } from '../../../../list/length.mjs';
export function refactor_input_swap_last_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index} = args;
    let {function_declaration} = args;
    let params = js_function_declaration_to_params(function_declaration);
    let params_length = list_length(params);
    let limit = params_length - index;
    for (let i of range(0, list_length()));
    refactor_input_swap_generic();
}