import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function date_now() {
    arguments_assert(arguments, []);
    return new Date();
    metadata([]);
}