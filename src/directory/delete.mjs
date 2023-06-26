import { boolean_value_true } from '../boolean/value/true.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
import fs from 'fs';
export async function directory_delete(directory_path) {
    let v = await path_exists(directory_path);
    assert(v);
    let v_2 = {
        recursive: boolean_value_true(),
        force: boolean_value_true()
    };
    await fs.promises.rm(directory_path, v_2);
    metadata([]);
}