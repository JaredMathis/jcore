import { task_id_get } from '../../id/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { task_title_append } from '../../title/append.mjs';
export async function task_current_title_append() {
    arguments_assert(arguments, []);
    let task_number = await task_id_get();
    task_title_append(task_number);
    return result;
}