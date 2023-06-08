import { directory_is } from '../../is.mjs';
import { directory_read_paths } from '../paths.mjs';
import { function_is } from '../../../function/is.mjs';
import fs from 'fs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_is } from '../../../list/is.mjs';
import { path_is } from '../../../path/is.mjs';
export async function directory_read_recursive_generic(dir, path_list, on_directory, on_file) {
    arguments_assert(arguments, [
        path_is,
        list_is,
        function_is,
        function_is
    ]);
    let file_paths = await directory_read_paths(dir);
    for (let file_path of file_paths) {
        const is_directory = await directory_is(file_path);
        if (is_directory) {
            await directory_read_recursive_generic(file_path, path_list, on_directory, on_file);
            await on_directory(path_list, file_path);
        } else {
            await on_file(path_list, file_path);
        }
    }
    return path_list;
}