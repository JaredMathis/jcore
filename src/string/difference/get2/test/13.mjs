import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get2 } from '../../get2.mjs';
export function string_difference_get2_test_13() {
    arguments_assert(arguments, []);
    let expected = ['1-bc'];
    let actual = string_difference_get2('abca', 'aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}