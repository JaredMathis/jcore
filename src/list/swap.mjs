import { list_set } from './set.mjs';
import { list_get } from './get.mjs';
export function list_swap(list, index_a, index_b) {
    let a = list_get(list, index_a);
    let b = list_get(list, index_b);
    list_set(list, index_b, a);
    list_set(list, index_a, b);
}