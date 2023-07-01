import { database_storage_upload } from '../../database/storage/upload.mjs';
import { file_read_bytes } from '../../file/read/bytes.mjs';
import { private_get } from '../../private/get.mjs';
import { path_parse_name } from '../../path/parse/name.mjs';
import { git_hub_cached } from '../../git/hub/cached.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_upload_single(video_path) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return await git_hub_cached(video_upload_single, [video_path], lambda);
    async function lambda() {
        await database_storage_upload(video_path, video_path);
        let name = path_parse_name(video_path);
        const publitio = publitioApi(await private_get(`publit_api_key`), await private_get(`publit_api_secret`));
        const file = await file_read_bytes(video_path);
        return await publitio.uploadFile(file, 'file', {
            title: name,
            description: name,
            tags: '',
            privacy: '1',
            option_download: '0'
        });
    }
}