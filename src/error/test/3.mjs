import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { assert_throws } from '../../assert/throws.mjs';
export function error_test_3() {
    arguments_assert(arguments, []);
    let v_3 = function v() {
        let v_4 = 'message';
        let v_5 = 'second argument';
        let v_2 = error(v_4, v_5);
        return v_2;
    };
    assert_throws(v_3);
    metadata([]);
}