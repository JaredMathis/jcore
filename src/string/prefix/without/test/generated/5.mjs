import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_without } from '../../../without.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_without_test_generated_5() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_prefix_without('b', 'aab')));
    metadata([metadata_generated()]);
}