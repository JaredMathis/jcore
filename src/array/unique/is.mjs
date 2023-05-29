import { array_length_equal } from '../length/equal.mjs';
export function array_unique_is(list) {
    let u = array_unique(list);
    return array_length_equal(u, list);
}