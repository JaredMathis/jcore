import { task_number_get_string } from './number/get/string.mjs';
import { task_later } from './later.mjs';
import { task_set } from './set.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_now(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task = await task_later(title);
    let task_number_string = task_number_get_string(task);
    await task_set(task_number_string);
    return task;
}