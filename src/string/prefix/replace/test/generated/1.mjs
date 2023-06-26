import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
export function string_prefix_replace_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let v_2 = 'aa';
    let v_3 = 'aa';
    let v_4 = 'a';
    let actual = string_prefix_replace(v_2, v_3, v_4);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}