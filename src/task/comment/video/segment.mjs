import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_comment_video } from '../video.mjs';
import { video_segment } from '../../../video/segment.mjs';
export async function task_comment_video_segment(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await video_segment(video_key);
    await task_comment_video(issue_number, video_key);
}