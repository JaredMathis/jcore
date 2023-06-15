import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { error } from '../error.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_json_read } from '../file/json/read.mjs';
export async function task_add(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    await file_json_read()
}