import { integer_value_0 } from '../../integer/value/0.mjs';
import { string_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
export function string_empty_is(value) {
    arguments_assert(arguments, [string_is]);
    return string_length(value) === integer_value_0();
}