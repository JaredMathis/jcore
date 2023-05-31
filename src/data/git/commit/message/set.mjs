import { metadata } from '../../../../metadata.mjs';
import { git_data_commit_message } from '../../../../git/data/commit/message.mjs';
import { data_key_value_set } from '../../../key/value/set.mjs';
export async function data_git_commit_message_set(message) {
    await data_key_value_set(git_data_commit_message(), message);
    metadata([]);
}