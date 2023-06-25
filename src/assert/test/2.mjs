import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { assert_throws } from '../throws.mjs';
export function assert_test_2() {
    let v_3 = [];
    arguments_assert(arguments, v_3);
    let v_4 = function v() {
        let v_6 = false;
        let v_2 = assert(v_6);
        return v_2;
    };
    assert_throws(v_4);
    let v_5 = [];
    metadata(v_5);
}