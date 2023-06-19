import { json_to } from '../json/to.mjs';
import { assert_message } from './message.mjs';
export function assert_json(v, info) {
    assert_message(v, json_to(info));
}