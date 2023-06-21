import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_case_snake_to_camel } from '../../../camel.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_snake_to_camel_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = 'Aa';
    let actual = string_case_snake_to_camel('aa');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}