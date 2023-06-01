import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
import { path_parent_exists_ensure } from '../path/parent/exists/ensure.mjs';
export async function file_overwrite(file_path, contents) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    await path_parent_exists_ensure(file_path);
    await fs.promises.writeFile(file_path, contents);
    metadata([]);
}