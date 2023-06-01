import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function result_success() {
    arguments_assert(arguments, []);
    return 'success';
    metadata([]);
}