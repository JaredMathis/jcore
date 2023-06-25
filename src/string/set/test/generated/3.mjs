import { integer_value_2 } from '../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_set } from '../../../set.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_3() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = string_set('b', -integer_value_2(), 'b');
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}