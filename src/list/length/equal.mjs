import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_length } from '../length.mjs';
import { equal_by } from '../../equal/by.mjs';
export function list_length_equal(a, b) {
    arguments_assert(arguments, [
        list_is,
        list_is
    ]);
    let v = equal_by(list_length, a, b);
    return v;
    metadata([]);
}