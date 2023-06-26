import { task_number_get_string } from '../number/get/string.mjs';
import { task_set } from '../set.mjs';
import { task_available_last } from '../available/last.mjs';
export async function task_set_last() {
    let last = await task_available_last();
    let v = task_number_get_string(last);
    await task_set(v);
    return last;
    metadata([]);
}