import { directory_read } from '../../../directory/read.mjs';
import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function video_screen_recordings_combine() {
    arguments_assert(arguments, []);
    let result = path_video_screen_recordings();
    let paths = await directory_read(result);
    return result;
}