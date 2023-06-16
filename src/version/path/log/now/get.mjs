import { file_extension_json } from '../../../../file/extension/json.mjs';
import { string_add } from '../../../../string/add.mjs';
import { path_join } from '../../../../path/join.mjs';
import { version_path_tasks_get } from '../../tasks/get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function version_path_log_now_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let tasks_path = version_path_tasks_get(repository_name);
    let tasks_all_path = path_join([
        tasks_path,
        string_add('all', file_extension_json())
    ]);
    return tasks_all_path;
}