import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_starts_with } from '../../../with.mjs';
export function string_starts_with_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = boolean_value_true();
    let actual = string_starts_with('a', '');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}