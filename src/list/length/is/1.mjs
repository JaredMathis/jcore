import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_length_is_value } from './value.mjs';
export function list_length_is_1(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_length_is_value(list, 1);
    return v;
    metadata([]);
}