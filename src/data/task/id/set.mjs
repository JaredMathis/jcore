import { tautology } from '../../../tautology.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../../string/is.mjs';
import { data_key_value_set } from '../../key/value/set.mjs';
import { data_task_id } from '../id.mjs';
export async function data_task_id_set(task_id) {
    arguments_assert(arguments, [tautology]);
    arguments_assert(arguments, [string_is]);
    await data_key_value_set(data_task_id(), task_id);
    metadata([]);
}