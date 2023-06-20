import { identity } from '../../identity.mjs';
import { task_available_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_first } from '../../list/first.mjs';
export async function task_available_first() {
    arguments_assert(arguments, []);
    let available = await task_available_generic(identity);
    let last = list_first(available);
    return last;
}