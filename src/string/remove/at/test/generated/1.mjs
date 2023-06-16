import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_remove_at } from '../../../at.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_1() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_remove_at('', 1)));
    metadata([metadata_generated()]);
}