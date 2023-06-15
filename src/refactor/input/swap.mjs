import { list_swap } from '../../list/swap.mjs';
import { refactor_input_generic_simple } from './generic/simple.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_input_swap(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index_from, index_to} = args;
    let lambda = list => list_swap(list, index_from, index_to);
    await refactor_input_generic_simple(args, lambda);
}