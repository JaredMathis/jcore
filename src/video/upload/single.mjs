import { path_separator_change } from '../../path/separator/change.mjs';
import { database_storage_upload } from '../../database/storage/upload.mjs';
import { git_hub_cached } from '../../git/hub/cached.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_upload_single(video_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return await git_hub_cached(video_upload_single, [video_path], lambda);
    async function lambda() {
        let file_name = path_separator_change(video_path);
        return await database_storage_upload(file_name, video_path);
    }
}