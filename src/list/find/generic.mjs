import { list_single } from '../single.mjs';
import { list_length_is_0 } from '../length/is/0.mjs';
import { list_filter } from '../filter.mjs';
export function list_find_generic(list, predicate, or_null) {
    let filtered = list_filter(list, predicate);
    if (or_null) {
        if (list_length_is_0(filtered)) {
            return null;
        }
    }
    return list_single(filtered);
}