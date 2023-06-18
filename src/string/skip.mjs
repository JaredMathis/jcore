import { integer_is } from '../integer/is.mjs';
import { string_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_length } from './length.mjs';
import { string_sub } from './sub.mjs';
export function string_skip(input, index_start) {
    arguments_assert(arguments, [
        string_is,
        integer_is
    ]);
    let length = string_length(input);
    let v = string_sub(input, index_start, length);
    return v;
    metadata([]);
}