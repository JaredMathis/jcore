import { string_delete_soft_path } from '../../../string/delete/soft/path.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { file_rename } from '../../rename.mjs';
import { path_join } from '../../../path/join.mjs';
import { git_exclude_ensure_exists } from '../../../git/exclude/ensure/exists.mjs';
export async function file_delete_multiple_soft(file_paths) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const delete_name = string_delete_soft_path();
    await git_exclude_ensure_exists(delete_name);
    for (let file_path_old of file_paths) {
        let file_path_new = path_join([
            delete_name,
            file_path_old
        ]);
        await file_rename(file_path_old, file_path_new);
    }
}