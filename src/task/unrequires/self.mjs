import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_unrequires } from '../unrequires.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_unrequires_self(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await task_unrequires(task_number_string, task_number_string);
    return result;
    metadata([]);
}