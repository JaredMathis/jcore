import { task_property_state_set } from '../property/state/set.mjs';
import { task_close_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_close_try(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = task_property_state_set;
    return await task_close_generic(lambda, task_number_string);
}