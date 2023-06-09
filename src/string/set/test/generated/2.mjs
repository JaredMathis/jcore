import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_set } from '../../../set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 'aab';
    let v_2 = 'aab';
    let v_3 = integer_value_1();
    let v_4 = 'a';
    let actual = string_set(v_2, v_3, v_4);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}