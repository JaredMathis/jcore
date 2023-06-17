import { boolean_is } from './boolean/is.mjs';
import { error } from './error.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { assert } from './assert.mjs';
export function not(b) {
    assert_arguments_count(arguments, 1);
    return !b;
}