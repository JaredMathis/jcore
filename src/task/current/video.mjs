import { task_comment_video_segment } from '../comment/video/segment.mjs';
import { task_id_get_string } from '../id/get/string.mjs';
import { video_screen_recordings_subize } from '../../video/screen/recordings/subize.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export async function task_current_video() {
    arguments_assert(arguments, []);
    let issue_number = await task_id_get_string();
    let subized = await video_screen_recordings_subize();
    let video_key = object_property_get(subized, 'video_key');
    await task_comment_video_segment(video_key, issue_number);
}