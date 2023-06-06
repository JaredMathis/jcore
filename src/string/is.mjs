import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
export function string_is(value) {
    arguments_assert(arguments, [defined_is]);
    return typeof value === 'string';
    metadata([]);
}