import { list_reverse } from '../../../../list/reverse.mjs';
import { range_from } from '../../../../range/from.mjs';
import { refactor_input_swap_generic_to } from '../generic/to.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function refactor_input_swap_first_to(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await refactor_input_swap_generic_to(args, predicate, indices_get);
    function indices_get(index, params) {
        let ranged = range_from(1, index);
        let reversed = list_reverse(ranged);
        return reversed;
    }
    function predicate(index, params) {
        return index >= 1;
    }
}