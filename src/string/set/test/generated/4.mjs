import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_set } from '../../../set.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_4() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_set('aab', -2, 'a')));
    metadata([metadata_generated()]);
}