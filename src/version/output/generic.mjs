import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_contents } from '../file/contents.mjs';
import { git_ignore_filter } from '../../git/ignore/filter.mjs';
import { directory_read_current } from '../../directory/read/current.mjs';
export async function version_output_generic(repository_name, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let file_paths = await directory_read_current();
    let filtered = await git_ignore_filter(file_paths);
    for (let file_path of filtered) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
}