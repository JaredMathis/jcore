import { integer_value_1 } from '../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_sub } from '../../../sub.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
export function string_sub_test_generated_1() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = string_sub('a', -integer_value_1(), -integer_value_1());
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}