import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { version_sync_local_preview_generic } from '../generic.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_single_item } from '../../../../../list/single/item.mjs';
export async function version_sync_local_preview_single_difference(repository_name, file_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await version_sync_local_preview_generic(repository_name, list_single_item(file_path), false);
    return result;
}