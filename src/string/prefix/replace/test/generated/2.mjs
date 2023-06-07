import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
import { throws } from '../../../../../throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_replace_test_generated_2() {
    arguments_assert(arguments, []);
    assert(throws(() => string_prefix_replace('aa', 'b', 'b')));
    metadata([metadata_generated()]);
}