import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_tests } from '../../../tests.mjs';
export function string_difference_tests_test_generated_4() {
    arguments_assert(arguments, []);
    let expected = 'aa';
    let actual = string_difference_tests('', 'aa');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}