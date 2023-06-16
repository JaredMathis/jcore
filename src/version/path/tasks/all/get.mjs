import { file_path_json } from '../../../../file/path/json.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { version_path_tasks_get } from '../get.mjs';
export function version_path_tasks_all_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let tasks_path = version_path_tasks_get(repository_name);
    return file_path_json(tasks_path, 'all');
}