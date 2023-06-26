import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function directory_delete(directory_path) {
    let v = await path_exists(directory_path);
    assert(v);
    let v_2 = {
        recursive: true,
        force: true
    };
    await fs.promises.rm(directory_path, v_2);
    metadata([]);
}