import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { assert_throws } from '../throws.mjs';
export function assert_test_5() {
    let v_3 = [];
    arguments_assert(arguments, v_3);
    let v_4 = function v() {
        let v_6 = true;
        let v_7 = true;
        let v_2 = assert(v_6, v_7);
        return v_2;
    };
    assert_throws(v_4);
    let v_5 = [];
    metadata(v_5);
}