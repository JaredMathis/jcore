import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { todo } from '../todo.mjs';
export function integer_is(candidate) {
    arguments_assert(arguments, [tautology]);
    todo(`Maybe revisit after learning about JS number nuance - what about Infinity, NaN, etc.`);
    return Number.isFinite(candidate);
    metadata([]);
}