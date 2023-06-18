import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_set } from '../../../set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 'aab';
    let actual = string_set('aab', 1, 'a');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}