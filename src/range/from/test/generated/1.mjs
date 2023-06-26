import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { range_from } from '../../../from.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = [
        -integer_value_2(),
        -integer_value_1()
    ];
    let v_2 = -integer_value_2();
    let v_3 = -integer_value_1();
    let actual = range_from(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}