import { list_set } from './set.mjs';
import { list_get } from './get.mjs';
export function list_swap(list, index_from, index_to) {
    let from = list_get(list, index_from);
    let to = list_get(list, index_to);
    list_set(list, index_to, from);
    list_set(list, index_from, to);
}