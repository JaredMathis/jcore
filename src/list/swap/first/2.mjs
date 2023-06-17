import { list_swap } from '../../swap.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { add_1 } from '../../../add/1.mjs';
export function list_swap_first_2(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let first_index = 0;
    let second_index = add_1(first_index);
    list_swap(list, first_index, second_index);
}