import { metadata } from '../../metadata.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function git_ignore_cache() {
    arguments_assert(arguments, []);
    return 'cache';
    metadata([]);
}