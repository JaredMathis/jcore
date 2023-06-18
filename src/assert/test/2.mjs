import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { assert_throws } from '../throws.mjs';
export function assert_test_2() {
    arguments_assert(arguments, []);
    assert_throws(function v() {
        return assert(false);
    });
    metadata([]);
}