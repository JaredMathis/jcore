import { task_current } from '../current.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_sub_undo() {
    arguments_assert(arguments, []);
    let current = await task_current();
}