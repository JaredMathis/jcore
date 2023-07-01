import { video_upload_publit_single } from '../../../../upload/publit/single.mjs';
import { list_map_async } from '../../../../../list/map/async.mjs';
import { video_key_to_segment_paths } from '../paths.mjs';
export async function video_key_to_segment_paths_map(video_key) {
    let matches = await video_key_to_segment_paths(video_key);
    return await list_map_async(matches, video_upload_publit_single);
}