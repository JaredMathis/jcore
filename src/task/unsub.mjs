import { task_set_last } from './set/last.mjs';
import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    await task_finish();
    let last = await task_set_last();
    return last;
}