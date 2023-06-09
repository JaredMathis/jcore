import { metadata } from '../../../metadata.mjs';
import { task_requires_get } from '../../requires/get.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_get } from '../../get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_number_to_requires(task_number_string) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task = await task_get(task_number_string);
    let requires = task_requires_get(task);
    return requires;
    metadata([]);
}