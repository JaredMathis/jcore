import { git_hub_cached } from '../../git/hub/cached.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_read_bytes } from '../../file/read/bytes.mjs';
import { private_get } from '../../private/get.mjs';
import { publitioApi } from 'publitio_js_sdk';
export async function video_upload_single(first, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    ;
    return await git_hub_cached(video_upload_single, arguments, lambda);
    async function lambda() {
        const publitio = publitioApi(await private_get(`publit_api_key`), await private_get(`publit_api_secret`));
        const file = await file_read_bytes(first);
        return await publitio.uploadFile(file, 'file', {
            title: video_key,
            description: video_key,
            tags: '',
            privacy: '1',
            option_download: '0'
        });
    }
}