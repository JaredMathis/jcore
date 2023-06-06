import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { string_ends_with } from '../ends/with.mjs';
import { string_length } from '../length.mjs';
import { string_sub_from } from '../sub/from.mjs';
export function string_suffix_without(input, suffix) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    assert(string_ends_with(input, suffix));
    let end = string_length(input) - string_length(suffix);
    return string_sub_from(input, 0, end);
    metadata([]);
}