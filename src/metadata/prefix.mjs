import { arguments_assert } from '../arguments/assert.mjs';
export function metadata_prefix() {
    arguments_assert(arguments, []);
    return 'metadata_';
}