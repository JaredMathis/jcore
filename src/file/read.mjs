import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { assert } from '../assert.mjs';
import { path_exists } from '../path/exists.mjs';
import fs from 'fs';
export async function file_read(file_path) {
    arguments_assert(arguments, [tautology]);
    assert(await path_exists(file_path));
    return await fs.promises.readFile(file_path, 'utf8');
    metadata([]);
}