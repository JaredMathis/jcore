import { metadata } from '../metadata.mjs';
import { task_state_change } from './state/change.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_property_open } from './property/open.mjs';
export async function task_open(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = task_property_open();
    let v_2 = await task_state_change(task_number_string, v);
    return v_2;
    metadata([]);
}