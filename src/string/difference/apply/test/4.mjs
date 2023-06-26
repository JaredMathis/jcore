import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_4() {
    arguments_assert(arguments, []);
    let expected = 'aabbbbbaaaabbbaaaaaaaabbbaaaaaab';
    let v_2 = 'bbbaaaaaaaaaaaaaaa';
    let v_3 = [
        '0+aabbbbbaaaa',
        '22+bbb',
        '17-1',
        '31+b'
    ];
    let actual = string_difference_apply(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}