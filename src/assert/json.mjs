import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { json_to } from '../json/to.mjs';
import { assert_message } from './message.mjs';
export function assert_json(v, info) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = json_to(info);
    assert_message(v, v_2);
    metadata([]);
}