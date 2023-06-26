import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_set } from '../../../set.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_4() {
    arguments_assert(arguments, []);
    let v_4 = function v_2() {
        let v_5 = 'aab';
        let v_6 = -integer_value_2();
        let v_7 = 'a';
        let v_3 = string_set(v_5, v_6, v_7);
        return v_3;
    };
    let v = assert_throws(v_4);
    assert(v);
    metadata([metadata_generated()]);
}