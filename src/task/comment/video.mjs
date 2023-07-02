import { log } from '../../log.mjs';
import { b2_data_snake_get } from '../../b2/data/snake/get.mjs';
import { video_upload } from '../../video/upload.mjs';
import { list_multiple_combine } from '../../list/multiple/combine.mjs';
import { git_hub_repository_issue_comments_add } from '../../git/hub/repository/issue/comments/add.mjs';
import { list_map_property } from '../../list/map/property.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_join } from '../../list/join.mjs';
import { string_new_line } from '../../string/new/line.mjs';
import { list_map } from '../../list/map.mjs';
import { string_combine } from '../../string/combine.mjs';
import { assert } from '../../assert.mjs';
import { list_empty_not } from '../../list/empty/not.mjs';
import { b2_get } from '../../b2/get.mjs';
export async function task_comment_video(issue_number, video_key) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let b2 = await b2_get();
    let authorize = await b2.authorize();
    let authorize_data = b2_data_snake_get(authorize);
    return authorize_data;
    let uploads = await video_upload(video_key);
    console.log({ uploads });
    let url_streams = list_map_property(uploads, 'url_stream');
    assert(list_empty_not(url_streams));
    let notify = ['ismael-texidor'];
    let mapped = list_map(notify, function v(n) {
        return string_combine('@', n);
    });
    let comment_lines = list_multiple_combine([
        mapped,
        [video_key],
        url_streams
    ]);
    await git_hub_repository_issue_comments_add(issue_number, list_join(comment_lines, string_new_line()));
}