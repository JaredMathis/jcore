import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_suffix_without } from '../../../without.mjs';
import { throws } from '../../../../../throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_suffix_without_test_generated_3() {
    arguments_assert(arguments, []);
    assert(throws(() => string_suffix_without('a', 'b')));
    metadata([metadata_generated()]);
}