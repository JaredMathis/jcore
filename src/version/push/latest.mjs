import { version_list_file_add } from '../list/file/add.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_contents_each } from '../file/contents/each.mjs';
import { version_files_paths } from '../files/paths.mjs';
export async function version_push_latest(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let latest_files = [];
    let file_paths = await version_files_paths(repository_name);
    await version_file_contents_each(repository_name, file_paths, async (file_path, contents) => {
        version_list_file_add(latest_files, file_path, contents);
    });
    return latest_files;
}