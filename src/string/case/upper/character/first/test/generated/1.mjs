import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { string_case_upper_character_first } from '../../../first.mjs';
import { assert_throws } from '../../../../../../../assert/throws.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_upper_character_first_test_generated_1() {
    arguments_assert(arguments, []);
    assert(assert_throws(function v() {
        return string_case_upper_character_first('');
    }));
    metadata([metadata_generated()]);
}