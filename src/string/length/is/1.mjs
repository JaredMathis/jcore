import { metadata } from '../../../metadata.mjs';
import { equal } from '../../../equal.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { string_length } from '../../length.mjs';
export function string_length_is_1(c) {
    return equal(string_length(c), integer_value_1());
    metadata([]);
}