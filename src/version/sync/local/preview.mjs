import { directory_read_current } from '../../../directory/read/current.mjs';
import { metadata } from '../../../metadata.mjs';
import { version_sync_local_preview_generic } from './preview/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function version_sync_local_preview(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let file_paths = await directory_read_current();
    let differences = await version_sync_local_preview_generic(repository_name, file_paths, true);
    return differences;
    metadata([]);
}