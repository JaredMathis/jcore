import { range_from } from '../../../../range/from.mjs';
import { list_last_index } from '../../../../list/last/index.mjs';
import { add_1 } from '../../../../add/1.mjs';
import { refactor_input_swap_generic_to } from '../generic/to.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_swap_first_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await refactor_input_swap_generic_to(args, predicate, indices_get);
    function indices_get(index, params) {
        let index_next = add_1(index);
        let index_last = list_last_index(params);
        return range_from(index_next, index_last);
    }
    function predicate(index, params) {
        return index >= 1;
    }
}