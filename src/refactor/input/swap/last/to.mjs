import { list_index_valid } from '../../../../list/index/valid.mjs';
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
    assert(list_index_valid(index));
    let {function_declaration} = args;
    let params = js_function_declaration_to_params(function_declaration);
    let index_last = list_last_index(params);
    assert(predicate(index, params));
    for (let i of indices_get()) {
        let index_previous = subtract_1(i);
        await refactor_input_swap_generic(index_previous, i, args);
    }
    function indices_get(index) {
        let index_next = add_1(index);
        return range_from(index_next, index_last);
    }

    function predicate(index, params) {
        let index_last = list_last_index(params);
        return index < index_last;
    }
}