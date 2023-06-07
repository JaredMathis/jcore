import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_split } from '../../../split.mjs';
export function string_split_test_generated_7() {
    arguments_assert(arguments, []);
    let expected = [''];
    let actual = string_split('', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}