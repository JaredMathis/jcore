import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { file_exists } from './exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function file_delete(file_path) {
    arguments_assert(arguments, [path_is]);
    let v = await file_exists(file_path);
    assert(v);
    await fs.promises.rm(file_path);
    metadata([]);
}