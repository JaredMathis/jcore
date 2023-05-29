import { directory_exists_ensure } from '../../../directory/exists/ensure.mjs';
import { path_parent } from '../../parent.mjs';
export async function path_parent_exists_ensure(file_path) {
    let directory_path = path_parent(file_path);
    await directory_exists_ensure(directory_path);
}