import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_difference_get_external } from '../../../external.mjs';
export function string_difference_get_external_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = [];
    let v_2 = 'aa';
    let v_3 = 'aa';
    let actual = string_difference_get_external(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}