import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_open } from '../open.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_current_open(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await task_open(task_number_string);
    return result;
}