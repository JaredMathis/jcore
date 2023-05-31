import { metadata } from '../metadata.mjs';
import { path_parent_exists_ensure } from '../path/parent/exists/ensure.mjs';
import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
import fs from 'fs';
export async function file_rename(file_path_old, file_path_new) {
    assert(await path_exists(file_path_old));
    assert(!await path_exists(file_path_new));
    await path_parent_exists_ensure(file_path_new);
    await fs.promises.rename(file_path_old, file_path_new);
    metadata([]);
}