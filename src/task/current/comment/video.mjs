import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { task_comment_video } from '../../comment/video.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_current_comment_video(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let result = await task_comment_video(issue_number, video_key);
    return result;
}