import { task_open_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_open_unsummarized() {
    arguments_assert(arguments, []);
    let {open} = await task_open_all_unsummarized();
    return open;
}