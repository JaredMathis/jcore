import { metadata } from '../metadata.mjs';
import { task_summary } from './summary.mjs';
import { list_map } from '../list/map.mjs';
import { task_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_all() {
    arguments_assert(arguments, []);
    let all_unsummarized = await task_all_unsummarized();
    let v_3 = function v(t) {
        let v_2 = task_summary(t, all_unsummarized);
        return v_2;
    };
    let summaries = list_map(all_unsummarized, v_3);
    return summaries;
    metadata([]);
}