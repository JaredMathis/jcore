import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_case_upper_character_first } from '../../../first.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_upper_character_first_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = 'B';
    let v = 'b';
    let actual = string_case_upper_character_first(v);
    let v_2 = json_equal(actual, expected);
    assert(v_2);
    metadata([metadata_generated()]);
}