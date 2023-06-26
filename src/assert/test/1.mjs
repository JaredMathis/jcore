import { boolean_value_true } from '../../boolean/value/true.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
export function assert_test_1() {
    arguments_assert(arguments, []);
    let v = boolean_value_true();
    assert(v);
    metadata([]);
}