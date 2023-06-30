import { video_upload } from '../../video/upload.mjs';
import { video_segment } from '../../video/segment.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_comment_video(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await video_segment(video_key);
    let uploads = await video_upload(video_key);
}