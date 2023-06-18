import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_suffix_without } from '../../../without.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_suffix_without_test_generated_7() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => string_suffix_without('b', 'a'));
    assert(v);
    metadata([metadata_generated()]);
}