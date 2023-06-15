import { integer_parse } from '../../integer/parse.mjs';
import { list_swap } from '../../list/swap.mjs';
import { refactor_input_generic_simple } from './generic/simple.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_input_swap(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {index_from, index_to} = args;
    let index_from_integer = integer_parse(index_from);
    let index_to_integer = integer_parse(index_to);
    let lambda = list => list_swap(list, index_from_integer, index_to_integer);
    await refactor_input_generic_simple(args, lambda);
}