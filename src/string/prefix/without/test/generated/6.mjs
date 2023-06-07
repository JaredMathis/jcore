import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_prefix_without } from '../../../without.mjs';
export function string_prefix_without_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = '';
    let actual = string_prefix_without('aa', 'aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}