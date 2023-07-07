import { string_delete_soft_path } from '../../string/delete/soft/path.mjs';
import { file_move_to_subdirectory } from '../../file/move/to/subdirectory.mjs';
import { video_paths_filter } from '../paths/filter.mjs';
import { video_screen_recordings_path_read } from '../screen/recordings/path/read.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_last } from '../../list/last.mjs';
import { list_last_before } from '../../list/last/before.mjs';
export async function video_latest_delete() {
    arguments_assert(arguments, []);
    let paths = await video_screen_recordings_path_read();
    let filtered = video_paths_filter(paths);
    let last = list_last_before(filtered);
    return last
    await file_move_to_subdirectory(last, string_delete_soft_path());
}