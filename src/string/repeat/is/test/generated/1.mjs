import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_repeat_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_repeat_is_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = boolean_value_false();
    let actual = string_repeat_is('aab');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}