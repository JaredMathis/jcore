import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function data_path() {
    arguments_assert(arguments, []);
    let extension = `.json`
    return `./data.json`;
    metadata([]);
}