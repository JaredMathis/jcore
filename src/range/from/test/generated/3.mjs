import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { range_from } from '../../../from.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_3() {
    arguments_assert(arguments, []);
    let v_4 = function v_2() {
        let v_5 = integer_value_2();
        let v_6 = -integer_value_2();
        let v_3 = range_from(v_5, v_6);
        return v_3;
    };
    let v = assert_throws(v_4);
    assert(v);
    metadata([metadata_generated()]);
}