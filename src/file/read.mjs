import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
import fs from 'fs';
import { assert_message } from '../assert/message.mjs';
import { string_combine } from '../string/combine.mjs';
export async function file_read(file_path) {
    arguments_assert(arguments, [path_is]);
    let v = await path_exists(file_path);
    let v_2 = string_combine(`Path does not exist: `, file_path);
    assert_message(v, v_2);
    let v_3 = 'utf8';
    let result = await fs.promises.readFile(file_path, v_3);
    return result;
    metadata([]);
}