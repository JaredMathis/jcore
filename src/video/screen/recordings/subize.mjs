import { string_ends_with } from '../../../string/ends/with.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { video_screen_recordings_path } from './path.mjs';
import { video_screen_recordings_prefix } from './prefix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_read_non_recursive } from '../../../directory/read/non/recursive.mjs';
export async function video_screen_recordings_subize() {
    arguments_assert(arguments, []);
    let ish_video_prefix = video_screen_recordings_prefix();
    let path_base = video_screen_recordings_path();
    let paths = await directory_read_non_recursive(path_base);
    let filtered = list_filter(paths, function v(p) {
        return string_ends_with(p, '.mkv');
    });
    return paths;
}