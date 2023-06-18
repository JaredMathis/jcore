import { git_pacp_with_message } from './with/message.mjs';
import { assert } from '../../assert.mjs';
import { data_git_commit_message_initial } from '../../data/git/commit/message/initial.mjs';
import { task_property_id } from '../../task/property/id.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { data_get } from '../../data/get.mjs';
export async function git_pacp_generic(sync) {
    let data = await data_get();
    let v = task_property_id();
    let task_id = object_property_get(data, v);
    let initial = data_git_commit_message_initial();
    assert(task_id !== initial);
    let commit_message = task_id;
    await git_pacp_with_message(commit_message, sync);
}