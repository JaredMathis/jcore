import { task_current } from '../../current.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function task_current_title_append() {
    arguments_assert(arguments, []);
    let result = await task_current();
    return result;
}