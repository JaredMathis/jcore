import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
import { assert } from './assert.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { error } from './error.mjs';
export function equal(left, right) {
    if (arguments.length !== 2) {
        error();
    }
    if (!defined_is(left)) {
        error();
    }
    if (!defined_is(right)) {
        error();
    }
    return left === right;
    metadata([]);
}