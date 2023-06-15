import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { list_swap } from '../../../list/swap.mjs';
export async function refactor_input_swap_generic(args, index_from, index_to) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let lambda = list => list_swap(list, index_from, index_to);
    await refactor_input_generic_simple(args, lambda);
}