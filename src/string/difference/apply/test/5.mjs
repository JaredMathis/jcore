import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_5() {
    arguments_assert(arguments, []);
    let expected = 'aaabbbbaaaaaaaaaaabbbbbaaabbb';
    let actual = string_difference_apply('bbbbbbbbbaaaaaabbbaaaabb', [
        '0-5',
        '0+aaa',
        '13+aaaaabb',
        '21-1',
        '28+b'
    ]);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}