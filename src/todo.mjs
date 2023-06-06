import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { comment } from './comment.mjs';
import { string_is } from './string/is.mjs';
export function todo(message) {
    arguments_assert(arguments, [string_is]);
    comment(message);
    metadata([]);
}