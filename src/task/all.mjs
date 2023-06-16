import { task_summary } from './summary.mjs';
import { list_map } from '../list/map.mjs';
import { task_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_all() {
    arguments_assert(arguments, []);
    let all = await task_all_unsummarized();
    let summaries = list_map(all, task_summary);
    return summaries;
}