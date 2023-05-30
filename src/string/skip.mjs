import { string_length } from './length.mjs';
import { string_sub_from } from './sub/from.mjs';
export function string_skip(input, index_start) {
    let length = string_length(input);
    return string_sub_from(input, index_start, length);
}