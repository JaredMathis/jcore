import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_difference_apply } from '../../apply.mjs';
export function string_difference_apply_test_6() {
    arguments_assert(arguments, []);
    let expected = 'bbbaaaaaabaaaaabb';
    let actual = string_difference_apply('abbbbaaaabbbbbaaabbbaabbbbbb', [
        '0-2',
        '7+aa',
        '10-4',
        '10+aa',
        '19-9'
    ]);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}