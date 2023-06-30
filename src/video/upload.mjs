import { error } from '../error.mjs';
import { log } from '../log.mjs';
import { file_read_bytes } from '../file/read/bytes.mjs';
import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { publitioApi } from 'publitio_js_sdk';
import { private_get } from '../private/get.mjs';
export async function video_upload() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let ish_video_1_path = video_path_get(ish_video_1);
    const publitio = publitioApi(await private_get(`publit_api_key`), await private_get(`publit_api_secret`));
    const file = await file_read_bytes(ish_video_1_path);
    return await publitio.uploadFile(file, 'file', {
        title: ish_video_1,
        description: ish_video_1,
        tags: '',
        privacy: '1',
        option_download: '0'
    });
}