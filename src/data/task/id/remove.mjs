import { object_property_remove } from '../../../object/property/remove.mjs';
import { data_task_id } from '../id.mjs';
import { data_get } from '../../get.mjs';
export async function data_task_id_remove() {
    let data = await data_get();
    return object_property_remove(data, data_task_id());
}