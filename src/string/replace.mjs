import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from './is.mjs';
export function string_replace(input, from, to) {
    arguments_assert(arguments, [
        string_is,
        string_is,
        string_is
    ]);
    let v = input.replaceAll(from, to);
    return v;
    metadata([]);
}