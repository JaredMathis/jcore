import { list_last } from '../list/last.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_set } from './set.mjs';
import { task_number_get_string } from './number/get/string.mjs';
import { task_available } from './available.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    await task_finish();
    let available = await task_available();
    let last = list_last(available);
    await task_set(task_number_get_string(last));
    return last;
}