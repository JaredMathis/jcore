import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_sub_max } from '../../../max.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_sub_max_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = {
        'offset': 2,
        'left_index': 0,
        'right_index': 0
    };
    let actual = string_sub_max('aa', 'aab');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}