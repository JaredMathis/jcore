import { list_last } from '../list/last.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_set } from './set.mjs';
import { task_number_get_string } from './number/get/string.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let available = await task_finish();
    let last = list_last(available);
    await task_set(task_number_get_string(last));
    return available;
}