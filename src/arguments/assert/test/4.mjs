import { metadata_arguments_assert_extra_allow } from '../../../metadata/arguments/assert/extra/allow.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { integer_is } from '../../../integer/is.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { arguments_assert } from '../../assert.mjs';
export function arguments_assert_test_4() {
    arguments_assert(arguments, []);
    comment('wrong type (string is not a number)');
    assert_throws(() => arguments_assert([`1`], [integer_is]));
    metadata([metadata_arguments_assert_extra_allow()]);
}