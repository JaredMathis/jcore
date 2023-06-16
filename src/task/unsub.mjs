import { list_last } from '../list/last.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let available = await task_finish();
    let last = list_last(available);
    return available;
}