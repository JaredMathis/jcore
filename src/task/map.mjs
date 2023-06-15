import { file_json_map } from '../file/json/map.mjs';
import { version_path_tasks_all_get } from '../version/path/tasks/all/get.mjs';
export async function task_map(map) {
    let tasks_all_path = version_path_tasks_all_get(repository_name);
    const initial_value = [];
    await file_json_map(tasks_all_path, initial_value, map);
}