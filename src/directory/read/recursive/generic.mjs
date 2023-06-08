import fs from 'fs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { path_join } from '../../../path/join.mjs';
export async function directory_read_recursive_generic(dir, path_list, on_directory, on_file) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
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