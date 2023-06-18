import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_letter_digit_or_underscore_is } from '../../is.mjs';
export function string_letter_digit_or_underscore_is_test_2() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = string_letter_digit_or_underscore_is('2');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}