import { task_map } from '../map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_all_unsummarized() {
    arguments_assert(arguments, []);
    let result;
    await task_map(function v(tasks_all) {
        return result = tasks_all;
    });
    return result;
}