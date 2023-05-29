import { data_git_commit_message_get } from '../data/git/commit/message/get.mjs';
import { object_property_get } from '../object/property/get.mjs';
import { command_line } from '../command/line.mjs';
import { data_get } from '../data/get.mjs';
import { data_task_id } from '../data/task/id.mjs';
import { data_git_commit_message_initial } from '../data/git/commit/message/initial.mjs';
import { data_git_commit_message_set } from '../data/git/commit/message/set.mjs';
import { git_acp_with_message } from './acp/with/message.mjs';
export async function git_acp() {
    let commit_message = await data_git_commit_message_get();
    commit_message = await git_acp_with_message(commit_message);
}
