import { file_name_json } from '../../../../file/name/json.mjs';
import { version_path_log_get } from '../get.mjs';
import { path_join } from '../../../../path/join.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function version_path_log_now_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let log_path = version_path_log_get(repository_name);
    let tasks_all_path = path_join([
        log_path,
        file_name_json('all')
    ]);
    return tasks_all_path;
}