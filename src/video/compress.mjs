import { video_ffmpeg_generic } from './ffmpeg/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_compress(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    const suffix = 'compressed';
    const middle = `-vcodec libx265 -crf 28`;
    await video_ffmpeg_generic(video_key, middle, suffix);
}