import { integer_value_3 } from '../../../integer/value/3.mjs';
import { integer_value_2 } from '../../../integer/value/2.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { assert_arguments_count } from '../../../assert/arguments/count.mjs';
export function arguments_count_test_4() {
    arguments_assert(arguments, []);
    assert_throws(function v() {
        let v_2 = assert_arguments_count([
            integer_value_1(),
            integer_value_2()
        ], integer_value_3());
        return v_2;
    });
    metadata([]);
}