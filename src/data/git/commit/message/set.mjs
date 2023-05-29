import { data_git_commit_message_initial } from './initial.mjs';
import { data_key_value_set } from '../../../key/value/set.mjs';
export async function data_git_commit_message_set(message) {
    await data_key_value_set(data_git_commit_message_initial(), message);
}