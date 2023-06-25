import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
export function assert_test_1() {
    arguments_assert(arguments, []);
    assert(true);
    metadata([]);
}