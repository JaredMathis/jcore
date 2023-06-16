import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_similar } from '../../../similar.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_similar_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_similar('aab', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}