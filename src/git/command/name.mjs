import { metadata } from '../../metadata.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function git_command_name() {
    arguments_assert(arguments, []);
    return 'git';
    metadata([]);
}