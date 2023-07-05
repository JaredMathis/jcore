import { directory_read_non_recursive } from '../../../../directory/read/non/recursive.mjs';
import { video_screen_recordings_path } from '../path.mjs';
export async function video_screen_recordings_path_read() {
    let path_base = video_screen_recordings_path();
    let paths = await directory_read_non_recursive(path_base);
    return paths;
}