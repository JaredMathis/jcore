import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_skip } from '../../../skip.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
export function string_skip_test_generated_1() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => string_skip('b', -1));
    assert(v);
    metadata([metadata_generated()]);
}