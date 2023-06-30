import { path_exists_assert } from '../path/exists/assert.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
export async function file_read(file_path) {
    arguments_assert(arguments, [path_is]);
    await path_exists_assert(file_path);
    let v_3 = 'utf8';
    let result = await fs.promises.readFile(file_path, v_3);
    return result;
    metadata([]);
}