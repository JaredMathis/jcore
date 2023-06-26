import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_suffix_without } from '../../../without.mjs';
export function string_suffix_without_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = 'aab';
    let v_2 = 'aab';
    let v_3 = '';
    let actual = string_suffix_without(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}