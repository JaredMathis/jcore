import { boolean_value_true } from '../../boolean/value/true.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { assert_throws } from '../throws.mjs';
export function assert_test_5() {
    arguments_assert(arguments, []);
    let v_3 = function v() {
        let v_4 = boolean_value_true();
        let v_5 = boolean_value_true();
        let v_2 = assert(v_4, v_5);
        return v_2;
    };
    assert_throws(v_3);
    metadata([]);
}