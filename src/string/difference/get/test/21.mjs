import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get } from '../../get.mjs';
export function string_difference_get_test_21() {
    arguments_assert(arguments, []);
    let expected = [
        '0-8',
        '8+bb',
        '13+abab',
        '29-1'
    ];
    let actual = string_difference_get('bbbabbbbbbbbbaaaaaabbbaabbbaaa', 'bbbbbaaabbaaaababbbbaabbbaa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}