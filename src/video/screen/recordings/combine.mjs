import { path_video_screen_recordings } from '../../../path/video/screen/recordings.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function video_screen_recordings_combine() {
    arguments_assert(arguments, []);
    let result = path_video_screen_recordings();
    return result;
}