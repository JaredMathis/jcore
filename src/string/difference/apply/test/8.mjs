import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply2_test_8() {
    arguments_assert(arguments, []);
    let expected = 'bbbbbaaabbaaaababbbbaabbbaa';
    let actual = string_difference_apply('bbbabbbbbbbbbaaaaaabbbaabbbaaa', [
        '0-8',
        '8+bb',
        '13+abab',
        '29-1'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}