import { metadata } from '../../metadata.mjs';
import { tasks_open_all_unsummarized } from './all/unsummarized.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function tasks_open_unsummarized() {
    arguments_assert(arguments, []);
    let {open} = await tasks_open_all_unsummarized();
    return open;
    metadata([]);
}