import { video_key_to_segment_paths } from './key/to/segment/paths.mjs';
import { video_ffmpeg_generic } from './ffmpeg/generic.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_empty } from '../list/empty.mjs';
export async function video_segment(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let matches = await video_key_to_segment_paths(video_key);
    if (list_empty(matches)) {
        return;
    }
    const suffix = '%03d';
    const middle = `-c copy -map 0 -segment_time 00:12:00 -f segment`;
    await video_ffmpeg_generic(video_key, middle, suffix);
}