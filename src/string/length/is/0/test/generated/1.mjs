import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_length_is_0 } from '../../../0.mjs';
export function string_length_is_0_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_length_is_0('b');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}