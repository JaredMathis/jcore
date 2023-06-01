import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { comment } from './comment.mjs';
export function todo(message) {
    arguments_assert(arguments, [tautology]);
    comment(message);
    metadata([]);
}