import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { metadata } from '../../../metadata.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { not } from '../../../not.mjs';
import { list_string_lengths } from '../../../list/string/lengths.mjs';
import { list_unique } from '../../../list/unique.mjs';
import { string_is } from '../../is.mjs';
import { string_equal_count } from '../count.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_length_is_1 } from '../../../list/length/is/1.mjs';
import { equal } from '../../../equal.mjs';
import { list_single } from '../../../list/single.mjs';
import { subtract } from '../../../subtract.mjs';
export function string_equal_except_1(a, b) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v_3 = [
        a,
        b
    ];
    let lengths = list_string_lengths(v_3);
    let unique = list_unique(lengths);
    let v_4 = list_length_is_1(unique);
    let v_2 = not(v_4);
    if (v_2) {
        let v_5 = boolean_value_false();
        return v_5;
    }
    let equal_count = string_equal_count(a, b);
    let length = list_single(unique);
    let difference = subtract(length, equal_count);
    let v_6 = integer_value_1();
    let v = equal(difference, v_6);
    return v;
    metadata([]);
}