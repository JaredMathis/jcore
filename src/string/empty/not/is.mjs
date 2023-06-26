import { metadata } from '../../../metadata.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { string_length } from '../../length.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../is.mjs';
export function string_empty_not_is(s) {
    arguments_assert(arguments, [string_is]);
    return string_length(s) >= integer_value_1();
    metadata([]);
}