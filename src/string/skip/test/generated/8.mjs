import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_skip } from '../../../skip.mjs';
export function string_skip_test_generated_8() {
    arguments_assert(arguments, []);
    let expected = 'aa';
    let actual = string_skip('aa', 0);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}