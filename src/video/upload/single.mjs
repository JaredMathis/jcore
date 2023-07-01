import { database_storage_upload } from '../../database/storage/upload.mjs';
import { git_hub_cached } from '../../git/hub/cached.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_upload_single(video_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return video_path;
    return await git_hub_cached(video_upload_single, [video_path], lambda);
    async function lambda() {
        await database_storage_upload(video_path, video_path);
    }
}