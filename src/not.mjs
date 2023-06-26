import { error } from './error.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { defined_is } from './defined/is.mjs';
export function not(b) {
    assert_arguments_count(arguments, 1);
    let v = !defined_is(b);
    if (v) {
        error('invalid b');
    }
    return !b;
}