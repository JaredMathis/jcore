import { integer_value_10 } from '../value/10.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../../string/is.mjs';
export function integer_parse_try(input) {
    arguments_assert(arguments, [string_is]);
    let v_2 = integer_value_10();
    let v = parseInt(input, v_2);
    return v;
    metadata([]);
}