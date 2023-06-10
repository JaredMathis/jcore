import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply2 } from '../../apply2.mjs';
export function string_difference_apply2_test_2() {
    arguments_assert(arguments, []);
    let expected = 'bbabbbbbbbbabbbaabbbbb';
    let actual = string_difference_apply2('abaaabbbbaaab', [
        '0+bb',
        '4+bbbbbbb',
        '12+bbb',
        '9-3'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}