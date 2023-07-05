import { error } from '../../../error.mjs';
import { metadata } from '../../../metadata.mjs';
import { version_sync_local_preview_generic } from './preview/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function version_sync_local_preview(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let differences = await version_sync_local_preview_generic(repository_name, error());
    return differences;
    metadata([]);
}