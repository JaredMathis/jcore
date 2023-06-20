import { json_to } from '../json/to.mjs';
import { assert_message } from './message.mjs';
export function assert_json(v, info) {
    let v_2 = json_to(info);
    assert_message(v, v_2);
}