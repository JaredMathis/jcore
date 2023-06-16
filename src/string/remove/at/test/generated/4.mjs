import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_remove_at } from '../../../at.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_remove_at_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = {
        'left': 'a',
        'right': 'b'
    };
    let actual = string_remove_at('aab', 1);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}