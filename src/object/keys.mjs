import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function object_keys(object) {
    arguments_assert(arguments, [tautology]);
    return Object.keys(object);
    metadata([]);
}