import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_replace_test_generated_3() {
    arguments_assert(arguments, []);
    let v_4 = function v_2() {
        let v_5 = '';
        let v_6 = 'a';
        let v_7 = 'aa';
        let v_3 = string_prefix_replace(v_5, v_6, v_7);
        return v_3;
    };
    let v = assert_throws(v_4);
    assert(v);
    metadata([metadata_generated()]);
}