import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_is } from '../../../string/is.mjs';
import { data_key_value_set } from '../../key/value/set.mjs';
import { data_task_property_id } from '../property/id.mjs';
export async function data_task_id_set(task_id) {
    arguments_assert(arguments, [string_is]);
    await data_key_value_set(data_task_property_id(), task_id);
    metadata([]);
}