import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { path_exists } from '../path/exists.mjs';
export async function function_exists(function_name) {
    arguments_assert(arguments, [tautology]);
    let function_path = function_name_to_file_path(function_name);
    return await path_exists(function_path);
    metadata([]);
}