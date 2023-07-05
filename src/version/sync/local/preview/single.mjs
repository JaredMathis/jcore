import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { version_sync_local_preview_generic } from './generic.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function version_sync_local_preview_single(repository_name, file_paths) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await version_sync_local_preview_generic(repository_name, file_paths);
    return result;
}