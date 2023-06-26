import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get } from '../../get.mjs';
export function string_difference_get_test_19() {
    arguments_assert(arguments, []);
    let expected = [
        '0-2',
        '7+aa',
        '10-4',
        '10+aa',
        '19-9'
    ];
    let v_2 = 'abbbbaaaabbbbbaaabbbaabbbbbb';
    let v_3 = 'bbbaaaaaabaaaaabb';
    let actual = string_difference_get(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}