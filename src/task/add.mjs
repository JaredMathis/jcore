import { task_later } from './later.mjs';
import { string_to } from '../string/to.mjs';
import { task_set } from './set.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_number } from './property/number.mjs';
export async function task_add(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task = await task_later(title);
    let task_number = object_property_get(task, task_property_number());
    let task_number_string = string_to(task_number);
    await task_set(task_number_string);
}