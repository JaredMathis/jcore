import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
export async function file_exists(file_path) {
    arguments_assert(arguments, [tautology]);
    return await path_exists(file_path);
    metadata([]);
}