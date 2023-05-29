import { assert } from '../../assert.mjs';
import { string_ends_with } from '../ends/with.mjs';
import { string_length } from '../length.mjs';
import { string_sub_from } from '../sub/from.mjs';
export function string_without_suffix(input, suffix) {
    assert(string_ends_with(suffix, suffix));
    let end = string_length(input) - string_length(suffix);
    return string_sub_from(input, 0, end);
}