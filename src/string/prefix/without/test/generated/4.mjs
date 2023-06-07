import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_without } from '../../../without.mjs';
import { throws } from '../../../../../throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_without_test_generated_4() {
    arguments_assert(arguments, []);
    assert(throws(() => string_prefix_without('a', 'aab')));
    metadata([metadata_generated()]);
}