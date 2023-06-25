import { boolean_is } from './boolean/is.mjs';
import { error } from './error.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { assert } from './assert.mjs';
import { defined_is } from './defined/is.mjs';
export function not(b) {
    assert_arguments_count(arguments, 1);
    let v = !defined_is(b);
    if (v) {
        error('invalid b');
    }
    return !b;
}