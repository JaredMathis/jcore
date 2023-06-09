import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { data_task_id } from '../data/task/id.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { data_git_commit_message_initial } from '../data/git/commit/message/initial.mjs';
import { git_pacp_with_message } from './pacp/with/message.mjs';
import { data_get } from '../data/get.mjs';
import { assert } from '../assert.mjs';
export async function git_ac() {
    arguments_assert(arguments, []);
    let sync = false;
    let data = await data_get();
    let task_id = object_property_get(data, data_task_id());
    let initial = data_git_commit_message_initial();
    assert(task_id !== initial);
    let commit_message = task_id;
    await git_pacp_with_message(commit_message, sync);
    metadata([]);
}