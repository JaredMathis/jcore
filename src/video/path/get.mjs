import { video_path_output } from './output.mjs';
import { path_join } from '../../path/join.mjs';
export function video_path_get(video_key) {
    let file_path_output_name = `${ video_key }.mp4`;
    let file_path_output = path_join([
        video_path_output(),
        file_path_output_name
    ]);
    return file_path_output;
}