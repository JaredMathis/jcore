import { range_from } from '../../range/from.mjs';
import { video_upload } from '../upload.mjs';
import { string_to } from '../../string/to.mjs';
import { video_segment } from '../segment.mjs';
import { js_identifier_combine } from '../../js/identifier/combine.mjs';
import { video_screen_recordings_prefix } from '../screen/recordings/prefix.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_upload_1() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    for (let i of range_from(1, 5)) {
        let video_key = js_identifier_combine(ish_video_prefix, string_to(i));
        await video_segment(video_key);
        return await video_upload(video_key);
    }
}