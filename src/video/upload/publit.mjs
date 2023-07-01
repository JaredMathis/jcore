import { video_key_to_segment_paths } from '../key/to/segment/paths.mjs';
import { list_map_async } from '../../list/map/async.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { video_upload_publit_single } from './publit/single.mjs';
export async function video_upload_publit(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return await video_key_to_segment_paths_map(video_key);
}
async function video_key_to_segment_paths_map(video_key) {
    let matches = await video_key_to_segment_paths(video_key);
    return await list_map_async(matches, video_upload_publit_single);
}