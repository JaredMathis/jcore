import { string_is } from '../../../../string/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { git_data_commit_message } from '../../../../git/data/commit/message.mjs';
import { data_key_value_set } from '../../../key/value/set.mjs';
export async function data_git_commit_message_set(message) {
    arguments_assert(arguments, [string_is]);
    let v = git_data_commit_message();
    await data_key_value_set(v, message);
    metadata([]);
}