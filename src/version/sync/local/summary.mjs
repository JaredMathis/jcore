import { version_sync_local_preview } from './preview.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function version_sync_local_summary(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await version_sync_local_preview(repository_name);
    return result;
}