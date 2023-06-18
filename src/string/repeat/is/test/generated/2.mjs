import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_repeat_is } from '../../../is.mjs';
import { assert_throws } from '../../../../../assert/throws.mjs';
import { assert } from '../../../../../assert.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_repeat_is_test_generated_2() {
    arguments_assert(arguments, []);
    assert(assert_throws(() => string_repeat_is('a')));
    metadata([metadata_generated()]);
}