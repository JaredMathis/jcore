import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_index_of } from '../../../of.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_index_of_test_generated_1() {
    arguments_assert(arguments, []);
    assert(assert_throws(function v() {
        return string_index_of('a', 'aab');
    }));
    metadata([metadata_generated()]);
}