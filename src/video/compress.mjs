import { video_ffmpeg_generic } from './ffmpeg/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_compress(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const suffix = 'compressed';
    `ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:20:00 -f segment output%03d.mp4
    `;
    const middle = `-vcodec libx265 -crf 28`;
    await video_ffmpeg_generic(video_key, middle, suffix);
}