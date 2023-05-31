import { metadata } from '../metadata.mjs';
import { list_last_remove } from '../list/last/remove.mjs';
import { file_path_split } from '../file/path/split.mjs';
import { path_join } from './join.mjs';
export function path_parent(file_path) {
    let split = file_path_split(file_path);
    list_last_remove(split);
    let directory_path = path_join(split);
    return directory_path;
    metadata([]);
}