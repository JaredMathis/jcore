import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_ends_with } from '../../../with.mjs';
export function string_ends_with_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_ends_with('', 'aab');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}