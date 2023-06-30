import { error } from '../../error.mjs';
import { git_hub_repository_issue_comments_add } from '../../git/hub/repository/issue/comments/add.mjs';
import { list_map_property } from '../../list/map/property.mjs';
import { video_upload } from '../../video/upload.mjs';
import { video_segment } from '../../video/segment.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_join } from '../../list/join.mjs';
import { string_new_line } from '../../string/new/line.mjs';
export async function task_comment_video(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await video_segment(video_key);
    let uploads = await video_upload(video_key);
    let url_streams = list_map_property(uploads, 'url_stream');
    await git_hub_repository_issue_comments_add(error(), list_join(url_streams, string_new_line()));
}