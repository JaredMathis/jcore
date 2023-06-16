import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_similar_swap_adjascent } from '../../../adjascent.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_similar_swap_adjascent_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_similar_swap_adjascent('b', '');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}