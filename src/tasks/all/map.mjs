import { version_repository_default } from '../../version/repository/default.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_json_map } from '../../file/json/map.mjs';
import { version_path_tasks_all_get } from '../../version/path/tasks/all/get.mjs';
export async function tasks_all_map(map) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_name = version_repository_default();
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    const initial_value = [];
    await file_json_map(tasks_all_path, initial_value, map);
}