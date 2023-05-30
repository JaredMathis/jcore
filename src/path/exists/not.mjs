import { path_exists } from '../exists.mjs';
export async function path_exists_not(file_path) {
    return await !await path_exists(file_path);
}