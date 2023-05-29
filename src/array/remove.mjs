import { array_index_of } from './index/of.mjs';
import { array_remove_at } from './remove/at.mjs';
export function array_remove(list, element) {
    let index = array_index_of(list, element);
    if (index >= 0) {
        array_remove_at(list, index);
    }
}