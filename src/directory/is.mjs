import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import fs from 'fs';
import { path_is } from '../path/is.mjs';
export async function directory_is(file_path) {
    arguments_assert(arguments, [path_is]);
    const stat = await fs.promises.stat(file_path);
    const is_directory = stat.isDirectory();
    return is_directory;
    metadata([]);
}