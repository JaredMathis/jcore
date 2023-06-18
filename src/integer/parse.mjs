import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { number_nan_is_not } from '../number/nan/is/not.mjs';
import { integer_parse_try } from './parse/try.mjs';
import { assert } from '../assert.mjs';
import { string_is } from '../string/is.mjs';
export function integer_parse(input) {
    arguments_assert(arguments, [string_is]);
    let result = integer_parse_try(input);
    let v = number_nan_is_not(result);
    assert(v);
    return result;
    metadata([]);
}