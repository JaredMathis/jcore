import { error } from '../error.mjs';
import { path_exists } from '../path/exists.mjs';
export async function file_exists(file_path) {
    return await path_exists(file_path);
}