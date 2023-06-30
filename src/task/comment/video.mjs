import { list_multiple_combine } from '../../list/multiple/combine.mjs';
import { git_hub_repository_issue_comments_add } from '../../git/hub/repository/issue/comments/add.mjs';
import { list_map_property } from '../../list/map/property.mjs';
import { video_upload } from '../../video/upload.mjs';
import { video_segment } from '../../video/segment.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_join } from '../../list/join.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { list_map } from '../../list/map.mjs';
import { string_combine } from '../../string/combine.mjs';
import { assert } from '../../assert.mjs';
import { list_empty_not } from '../../list/empty/not.mjs';
export async function task_comment_video(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    await video_segment(video_key);
    let uploads = await video_upload(video_key);
    let url_streams = list_map_property(uploads, 'url_stream');
    assert(list_empty_not(url_streams));
    let notify = ['ismael-texidor'];
    let mapped = list_map(notify, function v(n) {
        return string_combine('@', n);
    });
    let comment_lines = list_multiple_combine([mapped, url_streams]);
    await git_hub_repository_issue_comments_add(issue_number, list_join(comment_lines, string_new_line()));
}