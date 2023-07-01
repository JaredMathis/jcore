import { video_upload_single } from './upload/single.mjs';
import { video_key_to_segment_paths_map } from './key/to/segment/paths/map.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function video_upload(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_map = video_upload_single;
    return await video_key_to_segment_paths_map(video_key, lambda_map);
}