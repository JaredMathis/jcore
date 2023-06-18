import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_1() {
    arguments_assert(arguments, []);
    let expected = 'aaaaaabbaaabbbaaaaaa';
    let actual = string_difference_apply('bbbbbbbbbbbaaaaabbbbbbb', [
        '0+aaaaaa',
        '2-6',
        '8+aaa',
        '16-7',
        '19+a'
    ]);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}