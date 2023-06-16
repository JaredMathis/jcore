import { task_available_generic } from './available/generic.mjs';
import { task_summary } from './summary.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_available() {
    arguments_assert(arguments, []);
    let map = task_summary;
    return await task_available_generic(map);
}