import { metadata } from './metadata.mjs';
import { error } from './error.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
export function assert(value) {
    assert_arguments_count(arguments, 1);
    if (value === true) {
        return;
    }
    error('Assertion failed');
    metadata([]);
}