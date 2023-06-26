import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_case_snake_to_camel } from '../../../camel.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_snake_to_camel_test_generated_5() {
    arguments_assert(arguments, []);
    let expected = 'B';
    let v = 'b';
    let actual = string_case_snake_to_camel(v);
    let v_2 = json_equal(actual, expected);
    assert(v_2);
    metadata([metadata_generated()]);
}