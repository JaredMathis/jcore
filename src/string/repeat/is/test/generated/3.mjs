import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_repeat_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_repeat_is_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = boolean_value_true();
    let actual = string_repeat_is('aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}