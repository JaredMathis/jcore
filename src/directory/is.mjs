import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import fs from 'fs';
export async function directory_is(file_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const stat = await fs.promises.stat(file_path);
    const is_directory = stat.isDirectory();
    return is_directory;
}