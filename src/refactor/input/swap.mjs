import { integer_parse } from '../../integer/parse.mjs';
import { refactor_input_swap_generic } from './swap/generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_input_swap(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index_from, index_to} = args;
    let index_from_integer = integer_parse(index_from);
    let index_to_integer = integer_parse(index_to);
    await refactor_input_swap_generic(args, index_from_integer, index_to_integer);
}