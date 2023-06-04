import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { string_is } from './is.mjs';
export function string_length(input) {
    arguments_assert(arguments, [string_is]);
    return input.length;
    metadata([]);
}