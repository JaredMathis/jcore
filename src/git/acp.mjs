import { data_git_commit_message_get } from '../data/git/commit/message/get.mjs';
import { data_git_commit_message_set } from '../data/git/commit/message/set.mjs';
import { data_task_id } from '../data/task/id.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { data_git_commit_message_initial } from '../data/git/commit/message/initial.mjs';
import { git_acp_with_message } from './acp/with/message.mjs';
import { data_get } from '../data/get.mjs';
export async function git_acp() {
    let data = await data_get();
    let task_id = object_property_get(data, data_task_id());
    let commit_message = task_id;
    git_acp_with_message(commit_message);
}