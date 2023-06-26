import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get } from '../../get.mjs';
export function string_difference_get_test_23() {
    arguments_assert(arguments, []);
    let expected = [
        '0-2',
        '4-1',
        '11+bbb',
        '21+baabbbbbbbbbaabb'
    ];
    let v_2 = 'bbaabbbbaabbaaaaabbbb';
    let v_3 = 'aabbbaabbaabbbaaabbbbbaabbbbbbbbbaabb';
    let actual = string_difference_get(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}