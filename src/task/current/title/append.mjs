import { task_id_get } from '../../id/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_current_title_append() {
    arguments_assert(arguments, []);
    let task_number = await task_id_get();
    return result;
}