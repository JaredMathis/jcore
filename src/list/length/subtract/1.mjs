import { metadata } from '../../../metadata.mjs';
import { list_is } from '../../is.mjs';
import { subtract_1 } from '../../../subtract/1.mjs';
import { list_length } from '../../length.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_length_subtract_1(list) {
    arguments_assert(arguments, [list_is]);
    let result_to_be_mapped = list_length(list);
    let result = subtract_1(result_to_be_mapped);
    return result;
    metadata([]);
}