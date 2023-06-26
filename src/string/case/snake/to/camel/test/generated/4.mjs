import { metadata_generated } from '../../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../../metadata.mjs';
import { string_case_snake_to_camel } from '../../../camel.mjs';
import { assert_throws } from '../../../../../../../assert/throws.mjs';
import { assert } from '../../../../../../../assert.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
export function string_case_snake_to_camel_test_generated_4() {
    arguments_assert(arguments, []);
    assert(assert_throws(function v() {
        return string_case_snake_to_camel('');
    }));
    metadata([metadata_generated()]);
}