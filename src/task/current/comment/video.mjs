import { task_id_get_or_null } from '../../id/get/or/null.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_comment_video } from '../../comment/video.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_current_comment_video(video_key) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let issue_number = await task_id_get_or_null();
    return issue_number;
    let result = await task_comment_video(issue_number, video_key);
    return result;
}