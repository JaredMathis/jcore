import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { string_case_upper_character_first } from '../../../first.mjs';
import { assert_throws } from '../../../../../../../assert/throws.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_upper_character_first_test_generated_1() {
    arguments_assert(arguments, []);
    let v_3 = function v() {
        let v_4 = '';
        let v_5 = string_case_upper_character_first(v_4);
        return v_5;
    };
    let v_2 = assert_throws(v_3);
    assert(v_2);
    metadata([metadata_generated()]);
}