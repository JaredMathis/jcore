import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { assert_throws } from '../throws.mjs';
export function assert_test_3() {
    arguments_assert(arguments, []);
    let v_3 = function v() {
        let v_2 = assert(undefined);
        return v_2;
    };
    assert_throws(v_3);
    metadata([]);
}