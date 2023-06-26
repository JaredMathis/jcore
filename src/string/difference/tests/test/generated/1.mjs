import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_tests } from '../../../tests.mjs';
export function string_difference_tests_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = '';
    let v_2 = '';
    let v_3 = '';
    let actual = string_difference_tests(v_2, v_3);
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}