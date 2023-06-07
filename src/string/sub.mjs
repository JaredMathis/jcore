import { integer_is } from '../integer/is.mjs';
import { string_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_to_list } from './to/list.mjs';
import { list_slice } from '../list/slice.mjs';
export function string_sub(input, start, end) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    let list = string_to_list(input);
    return list_slice(list, start, end);
    metadata([]);
}