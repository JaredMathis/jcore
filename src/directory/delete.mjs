import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function directory_delete(directory_path) {
    let v = await path_exists(directory_path);
    assert(v);
    await fs.promises.rm(directory_path, {
        recursive: true,
        force: true
    });
}