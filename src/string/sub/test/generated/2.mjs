import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_sub } from '../../../sub.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
export function string_sub_test_generated_2() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_sub('aab', -2, -1)));
    metadata([metadata_generated()]);
}