import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { number_nan_is_not } from '../number/nan/is/not.mjs';
import { integer_parse } from './parse.mjs';
export function integer_parsable(input) {
    arguments_assert(arguments, [tautology]);
    return number_nan_is_not(integer_parse(input));
    metadata([]);
}