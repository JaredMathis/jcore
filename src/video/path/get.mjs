import { video_path_output } from './output.mjs';
import { path_join } from '../../path/join.mjs';
export function video_path_get(ish_video_1) {
    let file_path_output_name = `${ ish_video_1 }.mp4`;
    let file_path_output = path_join([
        video_path_output(),
        file_path_output_name
    ]);
    return file_path_output;
}