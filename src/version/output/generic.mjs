import { arguments_assert } from '../../arguments/assert.mjs';
import { version_file_contents } from '../file/contents.mjs';
import { git_ignore_filter } from '../../git/ignore/filter.mjs';
import { directory_read_current } from '../../directory/read/current.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../../list/is.mjs';
export async function version_output_generic(repository_name, file_paths, lambda) {
    arguments_assert(arguments, [
        string_identifier_is,
        list_is,
        function_is
    ]);
    let filtered = await git_ignore_filter(file_paths);
    for (let file_path of filtered) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
}