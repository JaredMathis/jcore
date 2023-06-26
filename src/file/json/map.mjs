import { metadata } from '../../metadata.mjs';
import { not } from '../../not.mjs';
import { file_json_read } from './read.mjs';
import { file_json_overwrite } from './overwrite.mjs';
import { file_exists } from '../exists.mjs';
export async function file_json_map(tasks_all_path, initial_value, map) {
    let v_3 = await file_exists(tasks_all_path);
    let v = not(v_3);
    if (v) {
        await file_json_overwrite(tasks_all_path, initial_value);
    }
    let tasks_all = await file_json_read(tasks_all_path);
    let v_2 = map(tasks_all);
    if (v_2) {
        return;
    }
    await file_json_overwrite(tasks_all_path, tasks_all);
    metadata([]);
}