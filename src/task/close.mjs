import { task_state_change } from './state/change.mjs';
import { task_property_closed } from './property/closed.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_close(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = task_state_change;
    const property_value = task_property_closed();
    let v = await lambda(task_number_string, property_value);
    return v;
}