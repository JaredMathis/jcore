import { integer_value_1 } from '../../../integer/value/1.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../metadata/arguments/assert/extra/allow.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_3() {
    arguments_assert(arguments, []);
    comment('Too many predicates');
    assert_throws(function v() {
        let v_2 = arguments_assert([integer_value_1()], [
            integer_is,
            integer_is
        ]);
        return v_2;
    });
    metadata([metadata_arguments_assert_extra_allow()]);
}