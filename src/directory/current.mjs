import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function directory_current() {
    arguments_assert(arguments, []);
    return '.';
    metadata([]);
}