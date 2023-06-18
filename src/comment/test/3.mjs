import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { comment } from '../../comment.mjs';
import { assert_throws } from '../../assert/throws.mjs';
export function comment_test_3() {
    arguments_assert(arguments, []);
    assert_throws(function v() {
        let v_2 = comment('test', 'extra argument');
        return v_2;
    });
    metadata([]);
}