import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { integer_half } from '../../../half.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_half_test_generated_1() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => integer_half(3));
    assert(v);
    metadata([metadata_generated()]);
}