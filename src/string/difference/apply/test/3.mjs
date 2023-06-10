import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_3() {
    arguments_assert(arguments, []);
    let expected = 'bbbbaaaaabbaaaa';
    let actual = string_difference_apply('aaaabbbaabbbbbabbbbbbaaabbaaaa', [
        '0-4',
        '0+b',
        '9-12'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}