import { metadata } from '../../metadata.mjs';
import { integer_value_2 } from '../../integer/value/2.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_length } from '../length.mjs';
export function list_length_multiple(matches) {
    arguments_assert(arguments, [list_is]);
    return list_length(matches) >= integer_value_2();
    metadata([]);
}