import { integer_value_3 } from '../../../integer/value/3.mjs';
import { integer_value_2 } from '../../../integer/value/2.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../metadata/arguments/assert/extra/allow.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_2() {
    let v_3 = [];
    arguments_assert(arguments, v_3);
    let v_4 = 'Too few predicates';
    comment(v_4);
    let v_5 = function v() {
        let v_7 = [
            integer_value_1(),
            integer_value_2(),
            integer_value_3()
        ];
        let v_8 = [
            integer_is,
            integer_is
        ];
        let v_2 = arguments_assert(v_7, v_8);
        return v_2;
    };
    assert_throws(v_5);
    let v_6 = [metadata_arguments_assert_extra_allow()];
    metadata(v_6);
}