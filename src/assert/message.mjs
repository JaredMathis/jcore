import { metadata } from '../metadata.mjs';
import { assert_message_lazy } from './message/lazy.mjs';
export function assert_message(value, message) {
    assert_message_lazy(value, function v() {
        return message;
    });
    metadata([]);
}