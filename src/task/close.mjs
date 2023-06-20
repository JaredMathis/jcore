import { task_close_generic } from './close/generic.mjs';
import { task_state_change } from './state/change.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_close(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = task_state_change;
    let v = await task_close_generic(lambda, task_number_string);
    return v;
}