import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get } from '../../get.mjs';
export function string_difference_get_test_20() {
    arguments_assert(arguments, []);
    let expected = [
        '0-1',
        '0+bb',
        '6-2',
        '7+b',
        '12+bb',
        '15+bbbbbaabbbbbba'
    ];
    let actual = string_difference_get('abaaabaaaaaba', 'bbbaaabbaaabbbabbbbbaabbbbbba');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}