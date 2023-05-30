import { list_index_of } from './index/of.mjs';
import { list_remove_at } from './remove/at.mjs';
export function list_remove(list, element) {
    let index = list_index_of(list, element);
    if (index >= 0) {
        list_remove_at(list, index);
    }
}