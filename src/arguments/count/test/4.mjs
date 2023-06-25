import { integer_value_3 } from '../../../integer/value/3.mjs';
import { integer_value_2 } from '../../../integer/value/2.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { assert_arguments_count } from '../../../assert/arguments/count.mjs';
export function arguments_count_test_4() {
    let v_3 = [];
    arguments_assert(arguments, v_3);
    let v_4 = function v() {
        let v_6 = [
            integer_value_1(),
            integer_value_2()
        ];
        let v_7 = integer_value_3();
        let v_2 = assert_arguments_count(v_6, v_7);
        return v_2;
    };
    assert_throws(v_4);
    let v_5 = [];
    metadata(v_5);
}