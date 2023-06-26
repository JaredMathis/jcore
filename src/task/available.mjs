import { metadata } from '../metadata.mjs';
import { task_available_generic } from './available/generic.mjs';
import { task_summary } from './summary.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_available() {
    arguments_assert(arguments, []);
    let map = task_summary;
    let v = await task_available_generic(map);
    return v;
    metadata([]);
}