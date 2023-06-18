import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_without } from '../../../without.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_without_test_generated_4() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = string_prefix_without('a', 'aab');
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}