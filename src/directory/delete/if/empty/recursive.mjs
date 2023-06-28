import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { path_parent } from '../../../../path/parent.mjs';
import { directory_empty_delete } from '../../../empty/delete.mjs';
import { directory_empty_is } from '../../../empty/is.mjs';
export async function directory_delete_if_empty_recursive(directory_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = await directory_empty_is(directory_path);
    if (v) {
        await directory_empty_delete(directory_path);
        let parent = path_parent(directory_path);
        await directory_delete_if_empty_recursive(parent);
    }
    metadata([]);
}