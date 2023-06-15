import { task_map } from './map.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_all() {
    arguments_assert(arguments, []);
    let result;
    await task_map(tasks_all => result = task_all);
    return result;
}