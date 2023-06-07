import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_replace } from '../../../replace.mjs';
export function string_replace_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let actual = string_replace('a', 'aab', '');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}