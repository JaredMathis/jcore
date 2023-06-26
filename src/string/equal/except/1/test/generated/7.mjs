import { boolean_value_false } from '../../../../../../boolean/value/false.mjs';
import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_equal_except_1 } from '../../../1.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_equal_except_1_test_generated_7() {
    arguments_assert(arguments, []);
    let expected = boolean_value_false();
    let actual = string_equal_except_1('', 'a');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}