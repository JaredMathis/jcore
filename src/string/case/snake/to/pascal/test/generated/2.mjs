import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_case_snake_to_pascal } from '../../../pascal.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_snake_to_pascal_test_generated_2() {
    arguments_assert(arguments, []);
    let expected = 'A';
    let v = 'a';
    let actual = string_case_snake_to_pascal(v);
    let v_2 = json_equal(actual, expected);
    assert(v_2);
    metadata([metadata_generated()]);
}