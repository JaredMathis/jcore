import { file_rename } from '../../file/rename.mjs';
import { video_paths_filter } from '../paths/filter.mjs';
import { video_screen_recordings_path_read } from '../screen/recordings/path/read.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function video_latest_delete() {
    arguments_assert(arguments, []);
    let paths = await video_screen_recordings_path_read();
    let filtered = video_paths_filter(paths);
    return filtered;
    await file_rename(file_path_before, file_path_after);
}