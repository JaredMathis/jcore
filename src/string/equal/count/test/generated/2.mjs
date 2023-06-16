import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_equal_count } from '../../../count.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_equal_count_test_generated_2() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_equal_count('aa', 'b')));
    metadata([metadata_generated()]);
}