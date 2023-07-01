import { file_rename } from '../../rename.mjs';
import { path_join } from '../../../path/join.mjs';
import { git_exclude_ensure_exists } from '../../../git/exclude/ensure/exists.mjs';
export async function file_delete_multiple_soft(file_paths_filtered) {
    const delete_name = 'delete';
    await git_exclude_ensure_exists(delete_name);
    for (let file_path_old of file_paths_filtered) {
        let file_path_new = path_join([
            delete_name,
            file_path_old
        ]);
        await file_rename(file_path_old, file_path_new);
    }
}