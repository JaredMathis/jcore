import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_underscore_is } from '../../../is.mjs';
export function string_underscore_is_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = boolean_value_false();
    let v_2 = '';
    let actual = string_underscore_is(v_2);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}