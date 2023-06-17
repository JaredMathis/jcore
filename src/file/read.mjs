import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
import fs from 'fs';
import { assert_message } from '../assert/message.mjs';
export async function file_read(file_path) {
    arguments_assert(arguments, [path_is]);
    assert_message(await path_exists(file_path), `Path does not exist: ` + file_path);
    let result = await fs.promises.readFile(file_path, 'utf8');
    return result;
    metadata([]);
}