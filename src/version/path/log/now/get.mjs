import { file_name_json } from '../../../../file/name/json.mjs';
import { version_path_log_get } from '../get.mjs';
import { path_join } from '../../../../path/join.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function version_path_log_now_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let log_path = version_path_log_get(repository_name);
    const file_name = 'all';
    let tasks_all_path = path_join([
        tasks_path,
        file_name_json(file_name)
    ]);
    return tasks_all_path;
}