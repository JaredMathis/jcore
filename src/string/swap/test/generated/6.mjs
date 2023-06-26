import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_swap } from '../../../swap.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_swap_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = 'aba';
    let v_2 = 'aab';
    let v_3 = integer_value_1();
    let v_4 = integer_value_2();
    let actual = string_swap(v_2, v_3, v_4);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}