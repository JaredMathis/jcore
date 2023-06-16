import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_get } from '../get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_title_get(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await task_get(task_number_string);
    return result;
}