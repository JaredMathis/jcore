import { path_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_remove_last } from '../list/remove/last.mjs';
import { file_path_split } from '../file/path/split.mjs';
import { path_join } from './join.mjs';
export function path_parent(file_path) {
    arguments_assert(arguments, [path_is]);
    let split = file_path_split(file_path);
    list_remove_last(split);
    let directory_path = path_join(split);
    return directory_path;
    metadata([]);
}