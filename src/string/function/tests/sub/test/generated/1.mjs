import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../json/equal.mjs';
import { assert } from '../../../../../../assert.mjs';
import { string_function_tests_sub } from '../../../sub.mjs';
export function string_function_tests_sub_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = '_test_';
    let actual = string_function_tests_sub();
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}