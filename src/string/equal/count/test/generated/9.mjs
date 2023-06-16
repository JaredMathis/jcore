import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_equal_count } from '../../../count.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_equal_count_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = 2;
    let actual = string_equal_count('aab', 'aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}