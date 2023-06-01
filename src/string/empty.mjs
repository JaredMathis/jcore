import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function string_empty() {
    arguments_assert(arguments, []);
    return '';
    metadata([]);
}