import { path_join } from '../../path/join.mjs';
import { list_add } from '../../list/add.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import fs from 'fs';
import path from 'path';
import { path_is } from '../../path/is.mjs';
import { list_is } from '../../list/is.mjs';
export async function directory_read_recursive(dir, file_list) {
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
            file_list = await directory_read_recursive(file_path, file_list);
        } else {
            list_add(file_list, file_path);
        }
    }
    return file_list;
}