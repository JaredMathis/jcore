import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_swap } from '../../../swap.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_swap_test_generated_1() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => string_swap('', 0, 1));
    assert(v);
    metadata([metadata_generated()]);
}