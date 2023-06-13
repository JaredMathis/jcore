import { list_swap } from '../../swap.mjs';
import { subtract_1 } from '../../../subtract/1.mjs';
import { list_last_index } from '../../last/index.mjs';
export function list_swap_last_2(list) {
    let last_index = list_last_index(list);
    let last_index_second = subtract_1(last_index);
    list_swap(list, last_index, last_index_second);
}