import { metadata } from '../metadata.mjs';
import { assert_message_lazy } from './message/lazy.mjs';
export function assert_message(value, message) {
    let v = () => message;
    assert_message_lazy(value, v);
    let v_2 = [];
    metadata(v_2);
}