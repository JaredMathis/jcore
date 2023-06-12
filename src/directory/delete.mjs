import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function directory_delete(directory_path) {
    assert(await path_exists(directory_path));
    await fs.promises.rmdir(directory_path);
}