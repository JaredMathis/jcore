import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { list_first } from './first.mjs';
import { list_length_is_1 } from './length/is/1.mjs';
export function list_single(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_length_is_1(list);
    assert(v);
    let result = list_first(list);
    return result;
    metadata([]);
}