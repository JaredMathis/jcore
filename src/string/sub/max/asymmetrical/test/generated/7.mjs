import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_sub_max_asymmetrical } from '../../../3.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_sub_max_asymmetrical_test_generated_7() {
    arguments_assert(arguments, []);
    let expected = {
        'offset': 1,
        'left_index': 2,
        'right_index': 0
    };
    let actual = string_sub_max_asymmetrical('aab', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}