import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { data_task_id } from '../id.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { data_get } from '../../get.mjs';
export async function data_task_id_get() {
    arguments_assert(arguments, []);
    let data = await data_get();
    return object_property_get(data, data_task_id());
    metadata([]);
}