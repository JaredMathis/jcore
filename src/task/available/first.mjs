import { list_last } from '../../list/last.mjs';
import { identity } from '../../identity.mjs';
import { task_available_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_available_first() {
    arguments_assert(arguments, []);
    let available = await task_available_generic(identity);
    let last = list_last(available);
    return last;
}