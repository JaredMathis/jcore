import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { comment } from '../../comment.mjs';
export function comment_test_1() {
    arguments_assert(arguments, []);
    let v = `Example comment`;
    comment(v);
    metadata([]);
}