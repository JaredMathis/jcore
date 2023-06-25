import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { comment } from '../../comment.mjs';
import { assert_throws } from '../../assert/throws.mjs';
export function comment_test_3() {
    arguments_assert(arguments, []);
    let v_3 = function v() {
        let v_4 = 'test';
        let v_5 = 'extra argument';
        let v_2 = comment(v_4, v_5);
        return v_2;
    };
    assert_throws(v_3);
    metadata([]);
}