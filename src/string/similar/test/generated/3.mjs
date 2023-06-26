import { boolean_value_false } from '../../../../boolean/value/false.mjs';
import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_similar } from '../../../similar.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_similar_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = boolean_value_false();
    let v_2 = '';
    let v_3 = 'aa';
    let actual = string_similar(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}