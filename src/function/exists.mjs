import { metadata } from '../metadata.mjs';
import { function_name_to_path } from './name/to/path.mjs';
import { path_exists } from '../path/exists.mjs';
export async function function_exists(function_name) {
    let function_path = function_name_to_path(function_name);
    return await path_exists(function_path);
    metadata([]);
}