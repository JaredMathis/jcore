import { list_map_async } from '../../../../../list/map/async.mjs';
import { video_key_to_segment_paths } from '../paths.mjs';
export async function video_key_to_segment_paths_map(video_key, lambda_map) {
    let matches = await video_key_to_segment_paths(video_key);
    return await list_map_async(matches, lambda_map);
}