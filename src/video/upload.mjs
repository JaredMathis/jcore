import { video_screen_recordings_prefix } from './screen/recordings/prefix.mjs';
import { video_path_get } from './path/get.mjs';
import { js_identifier_combine } from '../js/identifier/combine.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import PublitioAPI from 'publitio_js_sdk';
import { private_get } from '../private/get.mjs';
export async function video_upload() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let ish_video_1 = js_identifier_combine(ish_video_prefix, `1`);
    let ish_video_1_path = video_path_get(ish_video_1);
    return PublitioAPI
    const publitio = new PublitioAPI(await private_get(`publit_api_key`), await private_get(`publit_api_secret`));
    return publitio;
}