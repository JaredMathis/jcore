import { integer_value_3 } from '../../../integer/value/3.mjs';
import { integer_value_2 } from '../../../integer/value/2.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { metadata } from '../../../metadata.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_1() {
    let v = [
        integer_value_1(),
        integer_value_2(),
        integer_value_3()
    ];
    let v_2 = [
        integer_is,
        integer_is,
        integer_is
    ];
    arguments_assert(v, v_2);
    let v_3 = [];
    metadata(v_3);
}