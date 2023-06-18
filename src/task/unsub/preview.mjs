import { task_unsub_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_get } from '../get.mjs';
export async function task_unsub_preview() {
    arguments_assert(arguments, []);
    return await task_unsub_generic(on_if, on_else);
    async function on_else(last_string) {
        return await task_get(last_string);
    }
    async function on_if() {
        return 'no previous task';
    }
}