import { data_map } from '../../map.mjs';
import { data_task_id } from '../id.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
export async function data_task_id_set(task_id) {
    await data_map(map);
    const key = data_task_id();
    const value = task_id;
    function map(data) {
        object_property_set(data, key, value);
    }
}