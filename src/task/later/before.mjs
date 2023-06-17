import { string_to } from '../../string/to.mjs';
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
    let task_other = await task_later(title);
    let task_number_other = task_property_number_get(task_other);
    let task_number_string_other = string_to(task_number_other);
    return await task_requires(task_number_string_other, task_number_string);
}