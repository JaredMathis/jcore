import { data_map } from '../../map.mjs';
import { data_task_id } from '../id.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
export async function data_task_id_set(task_id) {
    const key = data_task_id();
    const value = task_id;
    await data_key_value_set(key, value);
}

async function data_key_value_set(key, value) {
    await data_map(map);
    function map(data) {
        object_property_set(data, key, value);
    }
}
