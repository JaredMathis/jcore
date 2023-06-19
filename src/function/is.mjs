import { arguments_assert } from '../arguments/assert.mjs';
import { assert_arguments_count } from '../assert/arguments/count.mjs';
import { defined_is } from '../defined/is.mjs';
import { error } from '../error.mjs';
import { not } from '../not.mjs';
export function function_is(candidate) {
    assert_arguments_count(arguments, 1);
    if (not(defined_is(candidate))) {
        error('invalid candidate');
    }
    return typeof candidate === 'function';
}