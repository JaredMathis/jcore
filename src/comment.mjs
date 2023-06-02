import { metadata } from './metadata.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
export function comment(text) {
    assert_arguments_count(arguments, 1);
    metadata([]);
}