import { integer_value_3 } from '../../../value/3.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { integer_half } from '../../../half.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_half_test_generated_1() {
    arguments_assert(arguments, []);
    let v_4 = function v_2() {
        let v_5 = integer_value_3();
        let v_3 = integer_half(v_5);
        return v_3;
    };
    let v = assert_throws(v_4);
    assert(v);
    metadata([metadata_generated()]);
}