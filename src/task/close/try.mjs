import { task_close_generic } from './generic.mjs';
import { task_state_change } from '../state/change.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_close_try(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = task_state_change;
    return await task_close_generic(lambda, task_number_string);
}