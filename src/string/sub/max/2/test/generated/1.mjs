import { metadata_generated } from '../../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { string_sub_max_2 } from '../../../2.mjs';
import { assert_throws } from '../../../../../../assert/throws.mjs';
import { assert } from '../../../../../../assert.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function string_sub_max_2_test_generated_1() {
    arguments_assert(arguments, []);
    assert(assert_throws(function v() {
        return string_sub_max_2('b', 'a');
    }));
    metadata([metadata_generated()]);
}