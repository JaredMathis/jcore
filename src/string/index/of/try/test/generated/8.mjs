import { integer_value_1 } from '../../../../../../integer/value/1.mjs';
import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_index_of_try } from '../../../try.mjs';
export function string_index_of_try_test_generated_8() {
    arguments_assert(arguments, []);
    let expected = -integer_value_1();
    let v_2 = '';
    let v_3 = 'a';
    let actual = string_index_of_try(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}