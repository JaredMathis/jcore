import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { task_property_id } from '../../../property/id.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { data_get } from '../../../../data/get.mjs';
export async function task_id_get_or_null() {
    arguments_assert(arguments, []);
    let data = await data_get();
    return object_property_get(data, task_property_id());
    metadata([]);
}