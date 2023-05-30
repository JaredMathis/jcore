import { list_length } from '../length.mjs';
export function list_length_equal(a, b) {
    let a_length = list_length(a);
    let b_length = list_length(b);
    return a_length === b_length;
}