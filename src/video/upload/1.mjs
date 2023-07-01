import { video_upload_publit } from './publit.mjs';
import { video_segment } from '../segment.mjs';
import { js_identifier_combine } from '../../js/identifier/combine.mjs';
import { video_screen_recordings_prefix } from '../screen/recordings/prefix.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_upload_1() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let video_key = js_identifier_combine(ish_video_prefix, `2`);
    await video_segment(video_key);
    return await video_upload_publit(video_key);
}