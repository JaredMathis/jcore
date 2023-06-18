import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_prefix_replace } from '../../../replace.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
export function string_prefix_replace_test_generated_2() {
    arguments_assert(arguments, []);
    let v = assert_throws(() => string_prefix_replace('aa', 'b', 'b'));
    assert(v);
    metadata([metadata_generated()]);
}