import { task_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_all() {
    arguments_assert(arguments, []);
    let result = await task_all_unsummarized();
    return result;
}