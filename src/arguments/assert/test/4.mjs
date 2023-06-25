import { metadata_arguments_assert_extra_allow } from '../../../metadata/arguments/assert/extra/allow.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_4() {
    arguments_assert(arguments, []);
    let v_3 = 'wrong type (string is not a number)';
    comment(v_3);
    let v_4 = function v() {
        let v_2 = arguments_assert([`1`], [integer_is]);
        return v_2;
    };
    assert_throws(v_4);
    metadata([metadata_arguments_assert_extra_allow()]);
}