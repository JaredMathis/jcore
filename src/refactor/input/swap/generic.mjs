import { refactor_input_generic_simple } from '../generic/simple.mjs';
import { list_swap } from '../../../list/swap.mjs';
import { integer_parse } from '../../../integer/parse.mjs';
export async function refactor_input_swap_generic(index_from, index_to, args) {
    let index_from_integer = integer_parse(index_from);
    let index_to_integer = integer_parse(index_to);
    let lambda = list => list_swap(list, index_from_integer, index_to_integer);
    await refactor_input_generic_simple(args, lambda);
}