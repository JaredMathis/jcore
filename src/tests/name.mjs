import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function tests_name() {
    arguments_assert(arguments, []);
    return 'tests';
    metadata([]);
}