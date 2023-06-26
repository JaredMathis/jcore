import { subtract } from '../../subtract.mjs';
import { string_take } from '../take.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { string_ends_with } from '../ends/with.mjs';
import { string_length } from '../length.mjs';
export function string_suffix_without(input, suffix) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = string_ends_with(input, suffix);
    assert(v);
    let end = subtract(string_length(input), string_length(suffix));
    let v_2 = string_take(input, end);
    return v_2;
    metadata([]);
}