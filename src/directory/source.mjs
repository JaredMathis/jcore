import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function directory_source() {
    arguments_assert(arguments, []);
    let result = 'src';
    return result;
    metadata([]);
}