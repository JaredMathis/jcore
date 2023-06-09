import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_difference_tests } from '../../../tests.mjs';
export function string_difference_tests_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = 'aa';
    let actual = string_difference_tests('aa', 'aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}