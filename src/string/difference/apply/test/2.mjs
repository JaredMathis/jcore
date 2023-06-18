import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_2() {
    arguments_assert(arguments, []);
    let expected = 'bbabbbbbbbbabbbaabbbbb';
    let actual = string_difference_apply('abaaabbbbaaab', [
        '0+bb',
        '4+bbbbbbb',
        '12+bbb',
        '9-3'
    ]);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}