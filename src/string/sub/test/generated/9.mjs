import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_sub } from '../../../sub.mjs';
export function string_sub_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = '';
    let actual = string_sub('', 0, 0);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}