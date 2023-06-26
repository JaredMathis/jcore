import { integer_value_1 } from '../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_remove_at } from '../../../at.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let v_2 = 'aa';
    let v_3 = integer_value_1();
    let actual = string_remove_at(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}