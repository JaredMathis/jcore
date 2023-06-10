import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_get2 } from '../../get2.mjs';
export function string_difference_get2_test_23() {
    arguments_assert(arguments, []);
    let expected = [
        '0-2',
        '4-1',
        '11+bbb',
        '21+baabbbbbbbbbaabb'
    ];
    let actual = string_difference_get2('bbaabbbbaabbaaaaabbbb', 'aabbbaabbaabbbaaabbbbbaabbbbbbbbbaabb');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}