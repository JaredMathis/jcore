import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
export function string_prefix_replace_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = 'aaba';
    let actual = string_prefix_replace('aa', 'a', 'aab');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}