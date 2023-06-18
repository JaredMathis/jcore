import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_unique } from '../unique.mjs';
import { list_length_equal } from '../length/equal.mjs';
export function list_unique_is(list) {
    arguments_assert(arguments, [list_is]);
    let u = list_unique(list);
    let v = list_length_equal(u, list);
    return v;
    metadata([]);
}