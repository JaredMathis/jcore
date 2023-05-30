import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
import fs from 'fs';
export async function file_read(file_path) {
    assert(await path_exists(file_path));
    return await fs.promises.readFile(file_path, 'utf8');
}