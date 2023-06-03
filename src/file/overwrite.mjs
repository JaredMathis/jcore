import { path_is } from '../path/is.mjs';
import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
import { path_parent_exists_ensure } from '../path/parent/exists/ensure.mjs';
import { string_is } from '../string/is.mjs';
if (false)
    path_is;
export async function file_overwrite(file_path, contents) {
    arguments_assert(arguments, [
        tautology,
        string_is
    ]);
    await path_parent_exists_ensure(file_path);
    await fs.promises.writeFile(file_path, contents);
    metadata([]);
}