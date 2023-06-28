import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function git_ignore_path() {
    arguments_assert(arguments, []);
    return '.gitignore';
    metadata([]);
}