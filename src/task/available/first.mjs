import { identity } from '../../identity.mjs';
import { task_available_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_first } from '../../list/first.mjs';
import { argument_binary_first } from '../../argument/binary/first.mjs';
export async function task_available_first() {
    arguments_assert(arguments, []);
    let available = await task_available_generic(argument_binary_first);
    let last = list_first(available);
    return last;
}