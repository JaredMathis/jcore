import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_to_tree } from '../../../tree.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_to_tree_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = { 'a': { 'a': {} } };
    let actual = string_to_tree('aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}