import { function_is } from '../../../function/is.mjs';
import fs from 'fs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_is } from '../../../list/is.mjs';
import { path_is } from '../../../path/is.mjs';
import { path_join } from '../../../path/join.mjs';
export async function directory_read_recursive_generic(dir, path_list, on_directory, on_file) {
    arguments_assert(arguments, [
        path_is,
        list_is,
        function_is,
        function_is
    ]);
    const files = await fs.promises.readdir(dir);
    for (let file of files) {
        const file_path = path_join([
            dir,
            file
        ]);
        const stat = await fs.promises.stat(file_path);
        if (stat.isDirectory()) {
            await directory_read_recursive_generic(file_path, path_list, on_directory, on_file);
            await on_directory(path_list, file_path);
        } else {
            await on_file(path_list, file_path);
        }
    }
    return path_list;
}