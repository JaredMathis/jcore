import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_compare(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = a.localeCompare(b);
    return v;
    metadata([]);
}