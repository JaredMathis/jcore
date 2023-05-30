import { number_nan_is_not } from '../number/nan/is/not.mjs';
import { integer_parse_try } from './parse/try.mjs';
import { assert } from '../assert.mjs';
export function integer_parse(input) {
    let result = integer_parse_try(input);
    assert(number_nan_is_not(result));
    return result;
}