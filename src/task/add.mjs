import { version_path_tasks_all_get } from '../version/path/tasks/all/get.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_json_read } from '../file/json/read.mjs';
import { file_json_overwrite } from '../file/json/overwrite.mjs';
import { file_exists } from '../file/exists.mjs';
export async function task_add(title) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    if (!await file_exists(tasks_all_path)) {
        await file_json_overwrite(tasks_all_path, []);
    }
    let tasks_all = await file_json_read(tasks_all_path);
    await file_json_overwrite(tasks_all);
}