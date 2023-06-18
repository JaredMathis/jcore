import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { todo } from '../todo.mjs';
import { defined_is } from '../defined/is.mjs';
export function integer_is(candidate) {
    arguments_assert(arguments, [defined_is]);
    todo(`Maybe revisit after learning about JS number nuance - what about Infinity, NaN, etc.`);
    let v = Number.isFinite(candidate) && Math.floor(candidate) === candidate;
    return v;
    metadata([]);
}