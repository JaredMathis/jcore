import { tautology } from '../tautology.mjs';
import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_split(input, separator) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return input.split(separator);
    metadata([]);
}