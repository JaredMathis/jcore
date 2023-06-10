import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_4() {
    arguments_assert(arguments, []);
    let expected = 'aabbbbbaaaabbbaaaaaaaabbbaaaaaab';
    let actual = string_difference_apply('bbbaaaaaaaaaaaaaaa', [
        '0+aabbbbbaaaa',
        '22+bbb',
        '17-1',
        '31+b'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}