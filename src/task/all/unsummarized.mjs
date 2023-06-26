import { metadata } from '../../metadata.mjs';
import { tasks_all_map } from '../../tasks/all/map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_all_unsummarized() {
    arguments_assert(arguments, []);
    let result;
    let v_2 = function v(tasks_all) {
        return result = tasks_all;
    };
    await tasks_all_map(v_2);
    return result;
    metadata([]);
}