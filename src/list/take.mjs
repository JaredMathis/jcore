import { integer_is } from '../integer/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_slice } from './slice.mjs';
export function list_take(list, count) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v = list_slice(list, 0, count);
    return v;
    metadata([]);
}