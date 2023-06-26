import { task_get_generic } from './get/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_find_property } from '../list/find/property.mjs';
export async function task_get(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_find_property;
    let v = await task_get_generic(task_number_string, lambda);
    return v;
    metadata([]);
}