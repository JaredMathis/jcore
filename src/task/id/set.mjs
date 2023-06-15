import { metadata } from '../../metadata.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../../string/is.mjs';
import { data_key_value_set } from '../../data/key/value/set.mjs';
import { task_property_id } from '../property/id.mjs';
export async function task_id_set(task_id) {
    arguments_assert(arguments, [string_is]);
    await data_key_value_set(task_property_id(), task_id);
    metadata([]);
}