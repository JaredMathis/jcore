import { subtract } from '../../subtract.mjs';
import { value_get } from '../../value/get.mjs';
export function list_sort_generic(list, value_get) {
    list.sort((a, b) => subtract(value_get(a), value_get(b)));
}