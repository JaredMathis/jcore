import { integer_parse_try } from './parse/try.mjs';
import { assert } from '../assert.mjs';
export function integer_parse(input) {
    let result = integer_parse_try(input);
    assert(!isNaN(result));
    return result;
}