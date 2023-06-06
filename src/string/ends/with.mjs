import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
export function string_ends_with(input, suffix) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return input.endsWith(suffix);
    metadata([]);
}