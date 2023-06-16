import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_close } from '../close.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_description } from '../description.mjs';
export async function task_close_description(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await task_close(task_number_string);
    await task_description(task_number_string, description)
    return result;
}