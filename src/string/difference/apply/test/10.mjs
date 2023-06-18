import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_10() {
    arguments_assert(arguments, []);
    let expected = 'aabbbaabbaabbbaaabbbbbaabbbbbbbbbaabb';
    let actual = string_difference_apply('bbaabbbbaabbaaaaabbbb', [
        '0-2',
        '4-1',
        '11+bbb',
        '21+baabbbbbbbbbaabb'
    ]);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}