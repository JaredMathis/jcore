import { path_parent_exists_ensure } from '../path/parent/exists/ensure.mjs';
import { assert } from '../assert.mjs';
import { directory_exists } from '../directory/exists.mjs';
import fs from 'fs';
export async function file_rename(file_path_old, file_path_new) {
    assert(await directory_exists(file_path_old));
    assert(!await directory_exists(file_path_new));
    if (false)
        await path_parent_exists_ensure(file_path_new);
    await fs.promises.rename(file_path_old, file_path_new);
}