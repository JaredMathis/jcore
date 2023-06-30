import { video_compress } from '../compress.mjs';
import { js_identifier_combine } from '../../js/identifier/combine.mjs';
import { video_screen_recordings_prefix } from '../screen/recordings/prefix.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_compress_1() {
    arguments_assert(arguments, []);
    `ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:20:00 -f segment output%03d.mp4
    `;
    let ish_video_prefix = video_screen_recordings_prefix();
    let video_key = js_identifier_combine(ish_video_prefix, `1`);
    await video_compress(video_key);
}