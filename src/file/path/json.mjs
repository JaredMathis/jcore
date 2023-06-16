import { file_name_json } from '../name/json.mjs';
import { path_join } from '../../path/join.mjs';
export function file_path_json(tasks_path, file_name) {
    return path_join([
        tasks_path,
        file_name_json(file_name)
    ]);
}