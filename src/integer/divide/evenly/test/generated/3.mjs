import { integer_value_2 } from '../../../../value/2.mjs';
import { integer_value_1 } from '../../../../value/1.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_evenly_test_generated_3() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = integer_divide_evenly(-integer_value_1(), integer_value_2());
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}