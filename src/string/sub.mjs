import { integer_is } from '../integer/is.mjs';
import { string_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_to_list } from './to/list.mjs';
import { list_slice } from '../list/slice.mjs';
import { list_join } from '../list/join.mjs';
import { string_empty } from './empty.mjs';
export function string_sub(input, start, end) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    let list = string_to_list(input);
    let sliced = list_slice(list, start, end);
    let result = list_join(sliced, string_empty());
    return result;
    metadata([]);
}