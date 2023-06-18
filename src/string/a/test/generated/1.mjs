import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_a } from '../../../a.mjs';
export function string_a_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let actual = string_a();
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}