import { string_starts_with } from '../starts/with.mjs';
import { assert } from '../../assert.mjs';
export function string_prefix_without(input, prefix_old) {
    assert(string_starts_with(input, prefix_old));
}