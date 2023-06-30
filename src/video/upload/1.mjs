import { video_upload } from '../upload.mjs';
import { video_screen_recordings_prefix } from '../screen/recordings/prefix.mjs';
import { js_identifier_combine } from '../../js/identifier/combine.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { publitioApi } from 'publitio_js_sdk';
export async function video_upload_1() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let video_key = js_identifier_combine(ish_video_prefix, `1`);
    return await video_upload(video_key);
}