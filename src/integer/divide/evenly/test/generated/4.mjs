import { integer_value_0 } from '../../../../value/0.mjs';
import { integer_value_3 } from '../../../../value/3.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_evenly_test_generated_4() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = integer_divide_evenly(integer_value_3(), integer_value_0());
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}