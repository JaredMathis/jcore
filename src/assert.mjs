import { metadata } from './metadata.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { assert_message } from './assert/message.mjs';
export function assert(value) {
    assert_arguments_count(arguments, 1);
    assert_message(value, 'Assertion failed')
    metadata([]);
}