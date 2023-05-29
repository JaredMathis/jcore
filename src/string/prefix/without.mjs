import { string_sub_start } from '../sub/start.mjs';
import { string_starts_with } from '../starts/with.mjs';
import { assert } from '../../assert.mjs';
import { string_length } from '../length.mjs';
export function string_prefix_without(input, prefix) {
    assert(string_starts_with(input, prefix));
    let length = string_length(prefix);
    return string_sub_start(input, length);
}