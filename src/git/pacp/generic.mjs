import { date_now_iso_underscores } from '../../date/now/iso/underscores.mjs';
import { task_now } from '../../task/now.mjs';
import { null_is } from '../../null/is.mjs';
import { task_id_get_or_null } from '../../task/id/get/or/null.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { git_pacp_with_message } from './with/message.mjs';
import { assert } from '../../assert.mjs';
import { data_git_commit_message_initial } from '../../data/git/commit/message/initial.mjs';
export async function git_pacp_generic(sync) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let task_id = await task_id_get_or_null();
    if (null_is(task_id)) {
        let now = date_now_iso_underscores();
        await task_now(now);
    }
    let initial = data_git_commit_message_initial();
    assert(task_id !== initial);
    let commit_message = task_id;
    await git_pacp_with_message(commit_message, sync);
}