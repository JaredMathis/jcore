import { integer_value_2 } from '../../../value/2.mjs';
import { integer_value_1 } from '../../../value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_half } from '../../../half.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_half_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = -integer_value_1();
    let v_2 = -integer_value_2();
    let actual = integer_half(v_2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}