import { file_json_read } from './read.mjs';
import { file_json_overwrite } from './overwrite.mjs';
import { file_exists } from '../exists.mjs';
export async function file_json_map(tasks_all_path, initial_value, map) {
    if (not(await file_exists(tasks_all_path))) {
        await file_json_overwrite(tasks_all_path, initial_value);
    }
    let tasks_all = await file_json_read(tasks_all_path);
    if (map(tasks_all)) {
        return;
    }
    await file_json_overwrite(tasks_all_path, tasks_all);
}