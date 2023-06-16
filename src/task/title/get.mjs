import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { task_get } from '../get.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { task_property_title } from '../property/title.mjs';
export async function task_title_get(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task = await task_get(task_number_string);
    return object_property_get(task, task_property_title());
}