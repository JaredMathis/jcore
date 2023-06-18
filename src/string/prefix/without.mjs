import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_skip } from '../skip.mjs';
import { string_starts_with } from '../starts/with.mjs';
import { assert } from '../../assert.mjs';
import { string_length } from '../length.mjs';
export function string_prefix_without(input, prefix) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = string_starts_with(input, prefix);
    assert(v);
    let length = string_length(prefix);
    let v_2 = string_skip(input, length);
    return v_2;
    metadata([]);
}