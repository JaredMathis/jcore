import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_sub_max_2 } from '../../../../max.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_sub_max_2_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = {
        'offset': 0,
        'left_index': 0,
        'right_index': 0
    };
    let actual = string_sub_max_2('', 'aab');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}