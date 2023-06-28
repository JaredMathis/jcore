import { arguments_assert } from '../arguments/assert.mjs';
export function js_prefix() {
    arguments_assert(arguments, []);
    return 'js';
}