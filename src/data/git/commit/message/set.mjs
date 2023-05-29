import { data_commit_message } from '../../../commit/message.mjs';
import { data_key_value_set } from '../../../key/value/set.mjs';
export async function data_git_commit_message_set(message) {
    await data_key_value_set(data_commit_message(), message);
}