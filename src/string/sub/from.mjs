import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
import { integer_is } from '../../integer/is.mjs';
export function string_sub_from(input, start, end) {
    arguments_assert(arguments, [
        string_is,
        integer_is,
        integer_is
    ]);
    return input.slice(start, end);
    metadata([]);
}