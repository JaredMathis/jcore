import { arguments_assert } from '../../assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { assert_throws } from '../../../assert/throws.mjs';
import { assert_arguments_count } from '../../../assert/arguments/count.mjs';
export function arguments_count_test_4() {
    arguments_assert(arguments, []);
    assert_throws(() => assert_arguments_count([
        1,
        2
    ], 3));
    metadata([]);
}