import { integer_parse_try } from './parse/try.mjs';
import { string_is } from '../string/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { number_nan_is_not } from '../number/nan/is/not.mjs';
export function integer_parsable(input) {
    arguments_assert(arguments, [string_is]);
    return number_nan_is_not(integer_parse_try(input));
    metadata([]);
}