import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { comment } from '../../comment.mjs';
import { throws } from '../../throws.mjs';
export function comment_test_2() {
    arguments_assert(arguments, []);
    throws(() => comment());
    metadata([]);
}