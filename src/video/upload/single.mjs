import { file_read_bytes } from '../../file/read/bytes.mjs';
import { private_get } from '../../private/get.mjs';
import { publitioApi } from 'publitio_js_sdk';
export async function video_upload_single(first, video_key) {
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