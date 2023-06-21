import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { json_equal } from '../../../../../../../json/equal.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { string_case_snake_to_camel } from '../../../camel.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_snake_to_camel_test_generated_3() {
    arguments_assert(arguments, []);
    let expected = 'Aab';
    let actual = string_case_snake_to_camel('aab');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}