import { data_key_value_set } from '../../key/value/set.mjs';
import { data_task_id } from '../id.mjs';
export async function data_task_id_set(task_id) {
    await data_key_value_set(data_task_id(), task_id);
}