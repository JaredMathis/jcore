import { integer_value_0 } from '../../../integer/value/0.mjs';
import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { comment } from '../../../comment.mjs';
import { assert_arguments_count } from '../../../assert/arguments/count.mjs';
export function arguments_count_test_3() {
    arguments_assert(arguments, []);
    comment(`no error`);
    assert_arguments_count([], integer_value_0());
    metadata([]);
}