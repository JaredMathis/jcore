import { metadata } from '../../metadata.mjs';
import { task_unsub_generic } from './generic.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_get } from '../get.mjs';
export async function task_unsub_preview() {
    arguments_assert(arguments, []);
    let v = await task_unsub_generic(on_if, on_else);
    return v;
    async function on_else(last_string) {
        let v_2 = await task_get(last_string);
        return v_2;
    }
    async function on_if() {
        return 'no previous task';
    }
    metadata([]);
}