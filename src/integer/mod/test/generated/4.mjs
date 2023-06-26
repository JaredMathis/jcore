import { integer_value_1 } from '../../../value/1.mjs';
import { integer_value_3 } from '../../../value/3.mjs';
import { integer_value_0 } from '../../../value/0.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_mod } from '../../../mod.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_mod_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = integer_value_0();
    let v_2 = integer_value_3();
    let v_3 = -integer_value_1();
    let actual = integer_mod(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}