import { number_nan_is_not } from '../number/nan/is/not.mjs';
import { integer_parse } from './parse.mjs';
export function integer_parsable(input) {
    return number_nan_is_not(integer_parse(input));
}