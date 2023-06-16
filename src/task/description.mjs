import { task_get } from './get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { task_body } from './body.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { task_property_body } from './property/body.mjs';
export async function task_description(issue_number, description) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let t = await task_get(issue_number);
    let body_before = object_property_get(t, task_property_body());
    let result = await task_body(issue_number, body);
    return result;
}