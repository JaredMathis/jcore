import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    return './data.json';
    metadata([]);
}