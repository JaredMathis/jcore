import { integer_value_2 } from '../../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_remove_at } from '../../../at.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = 'aa';
    let v_2 = 'aab';
    let v_3 = integer_value_2();
    let actual = string_remove_at(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}