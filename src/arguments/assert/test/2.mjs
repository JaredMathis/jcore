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
    arguments_assert(arguments, []);
    comment('Too few predicates');
    assert_throws(function v() {
        let v_2 = arguments_assert([
            integer_value_1(),
            integer_value_2(),
            integer_value_3()
        ], [
            integer_is,
            integer_is
        ]);
        return v_2;
    });
    metadata([metadata_arguments_assert_extra_allow()]);
}