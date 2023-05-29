import { array_length } from '../length.mjs';
export function array_length_equal(a, b) {
    let a_length = array_length(a);
    let b_length = array_length(b);
    return a_length === b_length;
}