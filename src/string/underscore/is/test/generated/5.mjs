import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_underscore_is } from '../../../is.mjs';
export function string_underscore_is_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_underscore_is('aab');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}