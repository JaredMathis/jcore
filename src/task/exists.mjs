import { list_find_property_exists } from '../list/find/property/exists.mjs';
import { task_get_generic } from './get/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_exists(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda = list_find_property_exists;
    let v = await task_get_generic(task_number_string, lambda);
    return v;
}