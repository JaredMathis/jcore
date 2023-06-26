import { integer_value_0 } from '../../../../integer/value/0.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_skip } from '../../../skip.mjs';
export function string_skip_test_generated_8() {
    arguments_assert(arguments, []);
    let expected = 'aa';
    let v_2 = 'aa';
    let v_3 = integer_value_0();
    let actual = string_skip(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}