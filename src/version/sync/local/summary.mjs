import { version_sync_local_preview } from './preview.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_length } from '../../../list/length.mjs';
export async function version_sync_local_summary(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await version_sync_local_preview(repository_name);
    let file_path_count = list_length(result);
    return { file_path_count };
    metadata([]);
}