import { string_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_index_of } from './index/of.mjs';
export function string_includes(input, search) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return string_index_of(input, search) >= 0;
    metadata([]);
}