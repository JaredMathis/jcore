import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_index_of_try } from '../../../try.mjs';
export function string_index_of_try_test_generated_6() {
    arguments_assert(arguments, []);
    let expected = 0;
    let actual = string_index_of_try('aab', 'aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}