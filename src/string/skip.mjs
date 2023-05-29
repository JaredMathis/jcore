import { string_length } from './length.mjs';
import { string_sub_from } from './sub/from.mjs';
export function string_skip(input, start) {
    let length = string_length(input);
    return string_sub_from(input, start, length);
}