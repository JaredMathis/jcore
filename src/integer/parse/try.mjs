import { integer_value_10 } from '../value/10.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../../string/is.mjs';
export function integer_parse_try(input) {
    arguments_assert(arguments, [string_is]);
    let v = parseInt(input, integer_value_10());
    return v;
    metadata([]);
}