import { task_property_number_get } from '../property/number/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_later } from '../later.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_requires } from '../requires.mjs';
export async function task_later_before(task_number_string, title) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let task = await task_later(title);
    let task_number = task_property_number_get(task);
    await task_requires(task_number_string);
    return task;
}