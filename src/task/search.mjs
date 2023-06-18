import { task_all } from './all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_search() {
    arguments_assert(arguments, []);
    let result = await task_all();
    return result;
}