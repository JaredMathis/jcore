import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { comment } from '../../comment.mjs';
comment(`New line varies by operating system. Making decision for now to be consistent`);
export function string_new_line() {
    arguments_assert(arguments, []);
    return '\n';
    metadata([]);
}