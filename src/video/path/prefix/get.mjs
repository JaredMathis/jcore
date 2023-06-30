import { video_path_output } from '../output.mjs';
import { path_join } from '../../../path/join.mjs';
export function video_path_prefix_get(video_key) {
    return path_join([
        video_path_output(),
        video_key
    ]);
}