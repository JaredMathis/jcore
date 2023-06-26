import { metadata } from '../../metadata.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_close } from '../close.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_description } from '../description.mjs';
export async function task_close_description(task_number_string, description) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await task_description(task_number_string, description);
    let result = await task_close(task_number_string);
    return result;
    metadata([]);
}