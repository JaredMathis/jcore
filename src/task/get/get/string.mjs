import { string_to } from '../../../string/to.mjs';
import { task_id_get } from '../../id/get.mjs';
export async function task_get_get_string() {
    let task_number = await task_id_get();
    let task_number_string = string_to(task_number);
    return task_number_string;
}