import { range_from } from '../../../../range/from.mjs';
import { js_function_declaration_to_params } from '../../../../js/function/declaration/to/params.mjs';
import { refactor_input_swap_generic } from '../generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { add_1 } from '../../../../add/1.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { assert } from '../../../../assert.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
export async function refactor_input_swap_last_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index} = args;
    assert(index >= 0);
    let {function_declaration} = args;
    let params = js_function_declaration_to_params(function_declaration);
    let index_last = list_last_index(params);
    assert(index < index_last);
    let index_next = add_1(index);
    for (let i of range_from(index_next, index_last)) {
        let index_previous = subtract_1(i);
        await refactor_input_swap_generic(index_previous, i);
    }
}