import { range_from } from '../../../../range/from.mjs';
import { js_function_declaration_to_params } from '../../../../js/function/declaration/to/params.mjs';
import { refactor_input_swap_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { add_1 } from '../../../../add/1.mjs';
export function refactor_input_swap_last_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index} = args;
    let {function_declaration} = args;
    let params = js_function_declaration_to_params(function_declaration);
    let index_next = add_1(index);
    let index_last = list_index_last(params);
    for (let i of range_from(index_next, index_last)) {
    }
    refactor_input_swap_generic();
}