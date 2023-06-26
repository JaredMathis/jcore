import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_3() {
    arguments_assert(arguments, []);
    let expected = 'bbbbaaaaabbaaaa';
    let v_2 = 'aaaabbbaabbbbbabbbbbbaaabbaaaa';
    let v_3 = [
        '0-4',
        '0+b',
        '9-12'
    ];
    let actual = string_difference_apply(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}