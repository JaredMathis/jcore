import { refactor_input_swap_generic } from './swap/generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_input_swap(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index_from, index_to} = args;
    await refactor_input_swap_generic(index_from, index_to, args);
}