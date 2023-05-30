import { list_unique } from '../unique.mjs';
import { list_length_equal } from '../length/equal.mjs';
export function list_unique_is(list) {
    let u = list_unique(list);
    return list_length_equal(u, list);
}