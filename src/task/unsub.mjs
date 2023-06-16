import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { task_current } from './current.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    let current = await task_current();
    let available = await task_finish();
    return available;
}