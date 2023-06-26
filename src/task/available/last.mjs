import { metadata } from '../../metadata.mjs';
import { list_last } from '../../list/last.mjs';
import { identity } from '../../identity.mjs';
import { task_available_generic } from './generic.mjs';
export async function task_available_last() {
    let available = await task_available_generic(identity);
    let last = list_last(available);
    return last;
    metadata([]);
}