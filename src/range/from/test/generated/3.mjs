import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { range_from } from '../../../from.mjs';
import { assert_throws } from '../../../../assert/throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_3() {
    arguments_assert(arguments, []);
    let v = assert_throws(function v_2() {
        return range_from(2, -2);
    });
    assert(v);
    metadata([metadata_generated()]);
}