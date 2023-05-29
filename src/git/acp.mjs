import { data_git_commit_message_get } from '../data/git/commit/message/get.mjs';
import { git_acp_with_message } from './acp/with/message.mjs';
export async function git_acp() {
    let commit_message = await data_git_commit_message_get();
    commit_message = await git_acp_with_message(commit_message);
}