import { function_is } from '../../../function/is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { version_file_contents } from '../contents.mjs';
import { list_length } from '../../../list/length.mjs';
import { list_index_of } from '../../../list/index/of.mjs';
export async function version_file_contents_each(repository_name, file_paths, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is
    ]);
    for (let file_path of file_paths) {
        let contents = await version_file_contents(repository_name, file_path);
        await lambda(file_path, contents);
    }
    metadata([]);
}