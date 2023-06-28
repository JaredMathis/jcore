import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_swap } from '../../swap.mjs';
import { subtract_1 } from '../../../subtract/1.mjs';
import { list_last_index } from '../../last/index.mjs';
export function list_swap_last_2(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let last_index = list_last_index(list);
    let last_index_second = subtract_1(last_index);
    list_swap(list, last_index, last_index_second);
    metadata([]);
}