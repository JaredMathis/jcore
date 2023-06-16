import { task_finish } from './finish.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_unsub() {
    arguments_assert(arguments, []);
    task_finish();
}