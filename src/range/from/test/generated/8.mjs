import { integer_value_0 } from '../../../../integer/value/0.mjs';
import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { range_from } from '../../../from.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_8() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = range_from(integer_value_1(), integer_value_0());
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}