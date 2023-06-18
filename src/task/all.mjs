import { task_summary } from './summary.mjs';
import { list_map } from '../list/map.mjs';
import { task_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_all() {
    arguments_assert(arguments, []);
    let all_unsummarized = await task_all_unsummarized();
    let summaries = list_map(all_unsummarized, function v(t) {
        return task_summary(t, all_unsummarized);
    });
    return summaries;
}