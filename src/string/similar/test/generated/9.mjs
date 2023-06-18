import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_similar } from '../../../similar.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_similar_test_generated_9() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = string_similar('b', '');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}