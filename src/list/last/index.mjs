import { list_length_subtract_1 } from '../length/subtract/1.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { subtract_1 } from '../../subtract/1.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_last_index(list) {
    arguments_assert(arguments, [list_is]);
    const length = list_length(list);
    let length_minus_1 = subtract_1(length);
    return length_minus_1;
    list_length_subtract_1;
    metadata([]);
}