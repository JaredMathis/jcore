import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { integer_divide_evenly } from '../../../evenly.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function integer_divide_evenly_test_generated_3() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => integer_divide_evenly(-1, 2)));
    metadata([metadata_generated()]);
}