import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_length_equal(a, b) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let a_length = list_length(a);
    let b_length = list_length(b);
    return a_length === b_length;
    metadata([]);
}