import { metadata } from '../../metadata.mjs';
import { equal } from '../../equal.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
export function string_empty_is(value) {
    arguments_assert(arguments, [string_is]);
    let v = string_length(value);
    let v_2 = integer_value_0();
    let v_3 = equal(v, v_2);
    return v_3;
    metadata([]);
}