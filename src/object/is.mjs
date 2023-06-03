import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export function object_is(v) {
    arguments_assert(arguments, [tautology]);
    return typeof v === 'object';
}