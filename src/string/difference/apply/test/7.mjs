import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_7() {
    arguments_assert(arguments, []);
    let expected = 'bbbaaabbaaabbbabbbbbaabbbbbba';
    let v_2 = 'abaaabaaaaaba';
    let v_3 = [
        '0-1',
        '0+bb',
        '6-2',
        '7+b',
        '12+bb',
        '15+bbbbbaabbbbbba'
    ];
    let actual = string_difference_apply(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}