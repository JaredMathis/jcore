import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function number_is(value) {
    arguments_assert(arguments, [tautology]);
    return typeof value === 'number';
    metadata([]);
}