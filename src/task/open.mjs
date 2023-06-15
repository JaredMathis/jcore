import { task_all } from './all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_open() {
    arguments_assert(arguments, []);
    let all = await task_all();
}