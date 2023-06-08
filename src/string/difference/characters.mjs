import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import * as Diff from 'diff'
export function string_difference_characters(string_old, string_new) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return Diff.diffChars(string_old, string_new)
}