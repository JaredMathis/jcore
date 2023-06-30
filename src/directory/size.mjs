import { metadata } from '../metadata.mjs';
import { directory_stat } from './stat.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function directory_size(file_path) {
    arguments_assert(arguments, [path_is]);
    const stat = await directory_stat(file_path);
    const is_directory = stat.isDirectory();
    return is_directory;
    metadata([]);
}