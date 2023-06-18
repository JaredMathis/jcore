import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { error } from '../../error.mjs';
import { assert_throws } from '../../assert/throws.mjs';
export function error_test_2() {
    arguments_assert(arguments, []);
    assert_throws(function v() {
        return error('message');
    });
    metadata([]);
}