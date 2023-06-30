import { task_comment_video } from '../comment/video.mjs';
import { video_screen_recordings_subize } from '../../video/screen/recordings/subize.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function task_current_video() {
    arguments_assert(arguments, []);
    video_screen_recordings_subize;
    task_comment_video;
}