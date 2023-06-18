import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_replace_test_generated_2() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = string_prefix_replace('aa', 'b', 'b');
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}