import { metadata } from './metadata.mjs';
import { assert_arguments_count } from './assert/arguments/count.mjs';
import { assert_message } from './assert/message.mjs';
export function assert(value) {
    let v = 1;
    assert_arguments_count(arguments, v);
    let v_2 = 'Assertion failed';
    assert_message(value, v_2);
    let v_3 = [];
    metadata(v_3);
}