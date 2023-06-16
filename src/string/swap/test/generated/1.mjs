import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_swap } from '../../../swap.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_swap_test_generated_1() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_swap('', 1, 3)));
    metadata([metadata_generated()]);
}