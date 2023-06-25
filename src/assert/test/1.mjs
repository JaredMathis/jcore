import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
export function assert_test_1() {
    let v = [];
    arguments_assert(arguments, v);
    let v_2 = true;
    assert(v_2);
    let v_3 = [];
    metadata(v_3);
}