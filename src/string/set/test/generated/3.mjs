import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_set } from '../../../set.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_3() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => string_set('b', -2, 'b'));
    assert(v);
    metadata([metadata_generated()]);
}