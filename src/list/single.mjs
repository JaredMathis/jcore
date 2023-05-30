import { assert } from '../assert.mjs';
import { list_first } from './first.mjs';
import { list_length_is_1 } from './length/is/1.mjs';
export function list_single(list) {
    assert(list_length_is_1(list, 1));
    let result = list_first(list);
    return result;
}