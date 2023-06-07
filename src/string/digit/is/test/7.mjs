import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_digit_is } from '../../is.mjs';
export function string_digit_is_test_7() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = string_digit_is('5');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}