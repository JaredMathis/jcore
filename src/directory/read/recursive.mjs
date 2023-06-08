import { path_join } from '../../path/join.mjs';
import { list_add } from '../../list/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import fs from 'fs';
import path from 'path';
import { path_is } from '../../path/is.mjs';
import { list_is } from '../../list/is.mjs';
export async function directory_read_recursive(dir, path_list) {
    arguments_assert(arguments, [
        path_is,
        list_is
    ]);
    const files = await fs.promises.readdir(dir);
    for (let file of files) {
        const file_path = path_join([
            dir,
            file
        ]);
        const stat = await fs.promises.stat(file_path);
        if (stat.isDirectory()) {
            await on_directory(path_list, file_path);
        } else {
            await on_file(path_list, file_path);
        }
    }
    return path_list;

    async function on_directory(path_list, file_path) {
        await directory_read_recursive(file_path, path_list);
    }
    async function on_file(path_list, file_path) {
        list_add(path_list, file_path);
    }
}