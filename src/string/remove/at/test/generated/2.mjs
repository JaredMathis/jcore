import { integer_value_2 } from '../../../../../integer/value/2.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_remove_at } from '../../../at.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_2() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        let v_3 = string_remove_at('a', -integer_value_2());
        return v_3;
    });
    assert(v);
    metadata([metadata_generated()]);
}