import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_prefix_without } from './without.mjs';
import { string_combine } from '../combine.mjs';
export function string_prefix_replace(input, prefix_old, prefix_new) {
    arguments_assert(arguments, [
        string_is,
        string_is,
        string_is
    ]);
    let prefix_without = string_prefix_without(input, prefix_old);
    return string_combine(prefix_new, prefix_without);
    metadata([]);
}