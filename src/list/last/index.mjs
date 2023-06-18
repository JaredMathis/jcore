import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { subtract_1 } from '../../subtract/1.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
export function list_last_index(list) {
    arguments_assert(arguments, [list_is]);
    const l = list_length(list);
    let v = subtract_1(l);
    return v;
    metadata([]);
}