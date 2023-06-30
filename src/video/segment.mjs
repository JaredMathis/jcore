import { video_ffmpeg_generic } from './ffmpeg/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_segment(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const suffix = '%03d';
    const middle = `-c copy -map 0 -segment_time 00:15:00 -f segment`;
    await video_ffmpeg_generic(video_key, middle, suffix);
}