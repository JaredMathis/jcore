import { integer_value_0 } from '../../../../value/0.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { integer_even_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_even_is_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = true;
    let v_2 = integer_value_0();
    let actual = integer_even_is(v_2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}